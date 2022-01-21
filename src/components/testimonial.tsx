import React from 'react'

const Testimonial: React.FC = () => (
  <div className="testimonial-bg pb-12">
    <div className="container flex flex-col items-center gap-5">
      <h1 className="font-bold text-center text-xl sm:text-4xl lg:text-[44px] py-[32px] md:py-[72px]">
        Our happy employees
      </h1>

      <div className="flex w-full px-4 justify-center items-center relative pb-[16px] sm:pb-[32px]">
        <div className=" flex w-full items-center justify-center gap-[16px] md:gap-[42px] ">
          <div className="h-[32px] w-[32px] md:h-[60px] md:w-[60px]  lg:h-[80px] lg:w-[80px] rounded-full ">
            <img
              className="object-cover h-full w-full rounded-full"
              src="https://media.istockphoto.com/photos/african-american-graduate-student-studying-from-home-during-covid19-picture-id1300821206?s=612x612"
              alt=""
            />
          </div>
          <div className="h-[32px] w-[32px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] rounded-full">
            <img
              className="object-cover h-full w-full rounded-full"
              src="https://media.istockphoto.com/photos/african-american-graduate-student-studying-from-home-during-covid19-picture-id1300821206?s=612x612"
              alt=""
            />
          </div>

          <div className="flex gap-[5px] sm:gap-[16px] items-center rounded-full">
            <img
              className="object-cover rounded-full h-[45px] w-[45px] md:h-[80px] md:w-[80px] lg:h-[110px] lg:w-[110px] border-2 sm:border-4 border-indigo-600"
              src="https://media.istockphoto.com/photos/african-american-graduate-student-studying-from-home-during-covid19-picture-id1300821206?s=612x612"
              alt=""
            />
            <div className="">
              <h1 className="text-[10px] sm:text-xl lg:text-[24px] font-medium">
                Ankit
              </h1>
              <h1 className="text-[10px] sm:text-xl lg:text-[24px]">Product</h1>
            </div>
          </div>

          <div className="h-[32px] w-[32px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] rounded-full">
            <img
              className="object-cover h-full w-full rounded-full"
              src="https://media.istockphoto.com/photos/african-american-graduate-student-studying-from-home-during-covid19-picture-id1300821206?s=612x612"
              alt=""
            />
          </div>
          <div className="object-cover h-[32px] w-[32px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] rounded-full">
            <img
              className="h-full w-full rounded-full"
              src="https://media.istockphoto.com/photos/african-american-graduate-student-studying-from-home-during-covid19-picture-id1300821206?s=612x612"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="testimonial-shadow mx-4 py-4 sm:w-3/4 shadow-xl rounded-2xl relative">
        <div className="md:py-[32px] px-4 sm:px-8 ">
          “Working at Procedure helped me ‘create’ a career for myself in
          product & technology. Maybe a story for aspiring product folks who
          currently have no clue how to get started. It’d be a completely
          different story if it were not for the support and the number of
          chances I got.”
        </div>

        <div className="flex justify-between text-center px-4 sm:px-8 text-xs md:text-sm md:text-[14px] lg:text-[20px] py-2 sm:leading-relaxed">
          <div className="w-1/2">2018</div>
          <div className=" flex-1">Today</div>
        </div>
        <div className="flex mr-4">
          <div className=" h-[5px] flex-1 bg-primary-200 my-2"></div>
          <div className="w-1/4 h-[5px]"></div>
        </div>

        <div className="flex justify-between text-center px-4 sm:px-8 text-xs md:text-[14px] lg:text-[20px] py-4 sm:leading-relaxed">
          <div className="w-1/2">Joined Procedure as an intern</div>
          <div className="flex-1">Leads product for a project</div>
        </div>
      </div>
    </div>
  </div>
)

export default Testimonial
