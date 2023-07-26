import { React } from "react";
const Demo = () => {
  return (
    <>
      <div class="flex justify-center">
        <div class="max-w-7xl grid grid-cols-1 px-4 py-2 my-20 gap-y-10 gap-x-12  md:grid-cols-2 xl:grid-cols-3">
          <div class="w-[300px] h-auto border-[3px] hover:border-yellow-500 rounded-xl shadow-xl hover:transform hover:scale-105 duration-500 ease-in-out hover:shadow-2xl md:ml-[55%] xl:ml-0">
            <div class="border-b border-slate-200 rounded-md   shadow-md relative z-10 bg-white divide-y divide-solid divide-gray-300 space-y-9">
              <div>
                <div class="uppercase tracking-wider text-white text-center rounded-md w-[320px] -ml-[10px] mt-5 p-3 border border-yellow-500 bg-yellow-500 font-bold">
                  gold
                </div>
                <div class="w-[150px] mt-8 mb-4 ml-[72px]">
                  <img
                    src="https://img.freepik.com/free-vector/beautiful-hand-draw-landscape-with-mountain-sketch-design_1035-20277.jpg?t=st=1656619535~exp=1656620135~hmac=f10f65b508250b926c1a72d1a699fc5c1b112e2934016ec2e3250c8f175395f8&w=900"
                    alt=""
                    srcset=""
                    class=""
                  />
                </div>
                <div class="flex justify-center tracking-wider text-yellow-500">
                  <div class="text-xl font-medium mt-[6px]">$</div>
                  <div class="text-6xl font-light">10</div>
                  <div class="text-xl font-medium mt-[32px]">/month</div>
                </div>
              </div>

              <div class="w-[230px] ml-8">
                <div class="flex-col  text-center space-y-2 my-5">
                  <div class="flex justify-center text-sm font-bold text-blue-500 space-x-1">
                    <ion-icon
                      name="checkmark-sharp"
                      class="mt-[3px]"
                    ></ion-icon>
                    <div class=""> Lorem ipsum</div>
                  </div>
                  <div class="flex justify-center text-sm font-bold text-blue-500 space-x-1">
                    <ion-icon
                      name="checkmark-sharp"
                      class="mt-[3px]"
                    ></ion-icon>
                    <div class=""> Lorem ipsum dolor sit.</div>
                  </div>
                  <div class="flex justify-center text-sm font-bold text-blue-500 space-x-1">
                    <ion-icon
                      name="checkmark-sharp"
                      class="mt-[3px]"
                    ></ion-icon>
                    <div class=""> Lorem ipsum </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#">
              <div class="uppercase text-white bg-blue-500 text-center rounded-b-md w-auto pt-8 pb-[31px]  text-sm font-bold -mt-2 relative z-0 hover:cursor-pointer hover:bg-yellow-500">
                upgrade
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Demo;
