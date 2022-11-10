import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Contexts/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { FaUserAlt, FaStar, FaStarHalfAlt } from "react-icons/fa";

const ReviewSection = ({ service }) => {
  const { user } = useContext(UserContext);
  const [userComments, setUserComments] = useState([]);
  const { _id, serviceName, serviceImg, servicePrice } = service;

  const handleComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const rating = form.rating.value;
    const comment = form.comment.value;

    const myComment = {
      myRating: rating,
      myComment: comment,
      myName: user?.displayName,
      myPhoto: user?.photoURL,
      myEmail: user?.email,
      serviceId: _id,
      serviceName,
      serviceImg,
      servicePrice,
    };

    fetch("http://localhost:5000/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myComment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.acknowledged) {
          toast.success("Your comment is added successfully!", {
            autoClose: 2000,
          });
          form.reset();
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/comments?serviceId=${_id}`)
      .then((res) => res.json())
      .then((data) => setUserComments(data.data));
  }, [_id]);

  return (
    <section>
      {user?.uid ? (
        <div>
          <div className="flex items-center gap-4">
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                alt="user"
                className="w-20 h-20 rounded-full"
              />
            ) : (
              <FaUserAlt className="text-5xl rounded-full bg-gray-200 p-2" />
            )}
            <div className="font-medium">
              <p>{user?.displayName}</p>
              <p className="text-sm">{user?.email}</p>
            </div>
          </div>
          <div className="h-32 mt-4">
            <form
              onSubmit={handleComment}
              className="grid grid-cols-6 gap-6 col-span-full lg:col-span-3"
            >
              <div className="col-span-full sm:col-span-2 md:col-span-1">
                <label htmlFor="rating" className="text-sm">
                  Your Rating <span className="text-red-700">*</span>
                </label>
                <input
                  id="rating"
                  type="text"
                  name="rating"
                  placeholder="rating in number"
                  className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full px-2.5 py-5"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-4 md:col-span-5">
                <label htmlFor="comment" className="text-sm">
                  Your Comment <span className="text-red-700">*</span>
                </label>
                <textarea
                  id="comment"
                  type="text"
                  name="comment"
                  placeholder="please write your honest opinion..."
                  className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full px-2.5 py-5 overflow-y-auto h-[62px]"
                  required
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Submit"
                  className="bg-green-700 text-white font-medium py-2 px-8 cursor-pointer transition duration-300 hover:bg-green-800"
                />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <hr />
          <h3 className="text-2xl text-gray-900 font-semibold text-center py-5">
            Please{" "}
            <Link
              to="/login"
              className="text-green-700 hover:text-gray-900 hover:underline"
            >
              login
            </Link>{" "}
            to leave a comment
          </h3>
          <hr />
        </div>
      )}

      <div className="mt-48 sm:mt-16 md:mt-14">
        {user?.uid && <hr className="mb-10" />}
        <h4 className="mb-6 text-2xl font-semibold text-green-700">Client's Comments</h4>
        {userComments.map((uc) => (
          <div key={uc._id} className="">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-3 mb-3 border-b pb-3">
              <div className="flex items-center gap-4 md:col-span-1">
                {uc?.myPhoto ? (
                  <img
                    src={uc?.myPhoto}
                    alt="user"
                    className="w-20 h-20 rounded-full"
                  />
                ) : (
                  <FaUserAlt className="text-5xl rounded-full bg-gray-200 p-2" />
                )}
                <div className="font-medium">
                  <p>{uc?.myName}</p>
                  <p className="text-sm">{uc?.myEmail}</p>
                  <p className="flex text-sm items-center gap-1 text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <span className="ml-2">{uc?.myRating}</span>
                  </p>
                </div>
              </div>
              <p className="md:col-span-2 lg:grid-cols-3">
                {uc?.myComment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
