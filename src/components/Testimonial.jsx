

const Testimonial = () => {
    return (
      <div>
        <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
          <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
            <div className="w-full max-w-6xl mx-auto">
              <div className="text-center max-w-xl mx-auto">
                <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
                  What people <br /> are saying.
                </h1>
                <h3 className="text-xl mb-5 font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <div className="text-center mb-10">
                  <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                  <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                </div>
              </div>
              <div className="-mx-3 md:flex items-start">
                {[
                  {
                    imgSrc: "https://i.pravatar.cc/100?img=1",
                    name: "Kenzie Edgar.",
                    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti."
                  },
                  {
                    imgSrc: "https://i.pravatar.cc/100?img=2",
                    name: "Stevie Tifft.",
                    testimonial: "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel."
                  },
                  {
                    imgSrc: "https://i.pravatar.cc/100?img=3",
                    name: "Tommie Ewart.",
                    testimonial: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi."
                  },
                  {
                    imgSrc: "https://i.pravatar.cc/100?img=4",
                    name: "Charlie Howse.",
                    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto."
                  },
                  
                ].map((item, index) => (
                  <div key={index} className="px-3 md:w-1/3">
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                      <div className="w-full flex mb-4 items-center">
                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                          <img src={item.imgSrc} alt={item.name} />
                        </div>
                        <div className="flex-grow pl-3">
                          <h6 className="font-bold text-sm uppercase text-gray-600">{item.name}</h6>
                        </div>
                      </div>
                      <div className="w-full">
                        <p className="text-sm leading-tight">
                          <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                          {item.testimonial}
                          <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  
       
      </div>
    );
  };
  
  export default Testimonial;
