import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const EditReview = () => {
  const comment = useLoaderData();
  const [updateComment, setUpdateComment] = useState(comment);
  const navigate = useNavigate();

  const handleEditComment = (event) => {
    event.preventDefault();

    fetch(`http://localhost:5000/comments/${comment.data._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateComment),
    })
    .then(res => res.json())
      .then(data => {
        if(data.data.modifiedCount){
          toast.success("Comment update successfully!", { autoClose: 2000 });
          navigate('/')
        }
      })
      .catch(err => console.error(err))
  };

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    const newComment = { ...updateComment };
    newComment[key] = value;
    setUpdateComment(newComment);
  };

  return (
    <div className="mt-32 mb-24 lg:w-11/12 mx-auto px-4 md:px-24 lg:px-0">
      <h2 className="text-4xl font-semibold text-green-700 mb-6">
        Edit Your Comment
      </h2>
      <section className="text-gray-700">
        <form
          onSubmit={handleEditComment}
          className="flex flex-col w-full space-y-12"
        >
          <fieldset className="grid gap-6 p-6 rounded-md shadow-lg">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="email" className="text-sm">
                  My Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  defaultValue={comment.data.myEmail}
                  className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
                  readOnly
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="name" className="text-sm">
                  Service Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  defaultValue={comment.data.serviceName}
                  className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
                  readOnly
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="rating" className="text-sm">
                  My Rating <span className="text-red-700">*</span>
                </label>
                <input
                  onChange={handleChange}
                  id="rating"
                  type="text"
                  name="rating"
                  defaultValue={comment.data.myRating}
                  className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
                  required
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="comment" className="text-sm">
                  Your Comment <span className="text-red-700">*</span>
                </label>
                <textarea
                  onChange={handleChange}
                  id="comment"
                  type="text"
                  name="comment"
                  defaultValue={comment.data.myComment}
                  className="h-32 bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="submit"
                value="Edit Comment"
                className="bg-green-700 text-white font-medium py-2 px-3 cursor-pointer transition duration-300 hover:bg-green-800"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default EditReview;
