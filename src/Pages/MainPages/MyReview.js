import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/AuthContext";
import {
  FaUserAlt,
  FaStar,
  FaStarHalfAlt,
  FaTrashAlt,
  FaEdit,
} from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const MyReview = () => {
  const { user } = useContext(UserContext);
  const [userComments, setUserComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/user-comments?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserComments(data.data));
  }, [user?.email]);

  
  const handleDelete = (item) => {
    const agree = window.confirm(
      `Are you sure, you want to delete: ${item?.serviceName}?`
    );
    if (agree) {
      fetch(`http://localhost:5000/comments/${item?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data.deletedCount) {
            toast.success("Comment deleted!", {
              autoClose: 2000,
            });
            const remaining = userComments.filter(
              (uc) => uc?._id !== item?._id
            );
            setUserComments(remaining);
          }
        });
    }
  };

  return (
    <div className="lg:w-11/12 mx-auto px-4 md:px-24 lg:px-0">
      <div className="my-44">
        <h4 className="mb-10 text-center text-4xl font-semibold text-green-700">
          My Reviews
        </h4>
        {userComments.map((uc) => (
          <div key={uc?._id} className="">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center gap-14 lg:gap-10 mb-3 border-b pb-3">
              <div className="flex flex-col items-center gap-4">
                {uc?.myPhoto ? (
                  <img
                    src={uc?.myPhoto}
                    alt="user"
                    className="w-20 h-20 rounded-full"
                  />
                ) : (
                  <FaUserAlt className="text-5xl rounded-full bg-gray-200 p-2" />
                )}
                <div className="font-medium text-center">
                  <p>{uc?.myName}</p>
                  <p className="text-sm">{uc?.myEmail}</p>
                  <p className="flex justify-center text-sm items-center gap-1 text-yellow-400 mt-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <span className="ml-2">{uc?.myRating}</span>
                  </p>
                </div>
              </div>
              <div className="md:col-span-2 lg:col-span-3">
                <p className="text-lg font-semibold mb-2">{uc?.serviceName} </p>
                <p className="text-sm text-justify">{uc?.myComment}</p>
              </div>
              <div className="flex flex-col items-start justify-center gap-3 ml-0 lg:ml-5">
                <Link to={`/edit-comment/${uc?._id}`}>
                  <button
                    title="Edit"
                    className="bg-white hover:bg-gray-100 rounded-xl py-3 px-3 text-xl"
                  >
                    <FaEdit className="inline-block" />
                    <small className="ml-3">Edit</small>
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(uc)}
                  title="Delete"
                  className="bg-white hover:bg-gray-100 rounded-xl py-3 px-3 text-xl"
                >
                  <FaTrashAlt className="inline-block" />
                  <small className="ml-3">Delete</small>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
