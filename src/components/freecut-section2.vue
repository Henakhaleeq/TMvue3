<template>
<div class="bg-[#F5F4F4]">
   <div class="container box-border ml-auto mr-[auto] pr-[8px] ml-[8px]">
    <div class="grid12-6 landing-page-grid landing-page-grid-right landing-page-grid-mobile mobile-only:ml-[1%] w-[46%] hidden mobile-only:mr-[1%] mobile-only:block mobile-only:w-[100%]">
        <a href="javascript:void(0)" id="yt-video-mobile" class="popup buton text-[#888] relative no-underline cursor-pointer" data-src="https://www.youtube.com/embed/a6fTWHo_br8">
<img class="w-[100%]" alt="sample tile video" src="https://m2.tilemountain.co.uk/media/wysiwyg/sample-tile-video-img.1524600765.png">
</a>
        <div id="popup3" class="overlay-popup fixed top-[0px] bottom-[0px] left-[0px] right-[0px] bg-black-70 block z-999" onclick="closePopup_three()">
            <div class="sample-popup-mobile invisible opacity-0">
                <a onclick="closePopup_three()" href="javascript:void(0);" class="close text-[#888] relative no-underline cursor-pointer">×</a>
                <iframe id="popup_img_mobile" width="100%" height="315" src="" frameborder="0" allowfullscreen="" data-gtm-yt-inspected-12="true" class="w-[100%]"></iframe>
            </div>
        </div>
    </div>
    <div class="grid12-6 landing-page-grid w-[46%] inline float-left ml-[1%] mr-[1%] mobile-only:float-none mobile-only:mr-[1%] mobile-only:ml-[1%]">
        <div class="order-free w-[100%] max-w-[455px] text-start">
            <h1 class="text-[42px] text-[#333072] font-arial font-bold w-[100%] max-w-[395px] mt-[0px] Tab-only:text-[27px] mobile-only:ml-[2%]">Order your <span class="test-[#ed018c]">FREE</span> tile samples today</h1>
            <p class="font-arial text-[#13132f] text-[16px] leading-6 Tab-only:mt-[16px] Tab-only:mb-[16px]  mobile-only:ml-[2%]">Can’t decide which tile style is right for you?
                Try our <span class="text-[#ed018c] text-[700] font-bold">next day sample service</span> and order up to three totally free cut samples to help you
                see how different styles look in your home.</p>
            <ul class="pl-[0px] no-underline  mobile-only:ml-[2%]">
                <li class="pb-[25px] pt-[25px] ">
                      <img
                class="w-[29px] h-[20px] absolute mobile-only:inline-block "
                src="../assets/tick-img.png"
                alt=""
              /> 
                    <small class="text-[16px] text-[#13132f] font-arial pl-[42px] block">Order online</small>
                </li>
                <li class="pb-[25px]">
                           <img
                class="w-[29px] h-[20px] absolute mobile-only:inline-block "
                src="../assets/tick-img.png"
                alt=""
              />
                    <small class="text-[16px] text-[#13132f] font-arial pl-[42px] block">Same-day dispatch on orders placed before 4pm</small>
                </li>
                <li class="pb-[25px]">
                                   <img
                class="w-[29px] h-[20px] absolute mobile-only:inline-block "
                src="../assets/tick-img.png"
                alt=""
              />
                    <small class="text-[16px] text-[#13132f] font-arial pl-[42px] block">Free next-day delivery* to most UK postcodes</small>
                </li>
                <li class="pb-[25px]">
                              <img
                class="w-[29px] h-[20px] absolute mobile-only:inline-block "
                src="../assets/tick-img.png"
                alt=""
              />
                    <small class="text-[16px] text-[#13132f] font-arial pl-[42px] block">Order three free cut samples or unlimited full size samples</small>
                </li>
            </ul>

        </div>


    </div>
    <div class="grid12-6 landing-page-grid landing-page-grid-right ml-[1%] w-[46%] inline mr-[1%] mobile-only:hidden">
    <a href="javascript:void(0)" id="yt-video" class="popup buton text-[#888] relative no-underline cursor-pointer"
        data-src="https://www.youtube.com/embed/a6fTWHo_br8">
        <img class="Tab-only:max-w-[46%]" alt="sample tile video"
            src="https://m2.tilemountain.co.uk/media/wysiwyg/sample-tile-video-img.1524600765.png">
    </a>
    <div class="sample-video-text bg-[#fff] text-center w-[46%] text-center flex flex-col w-[45.5%] mobile-only:hidden">
        <h2 class="bg-transparent text-[#333072] mt-[0px] mb-[0px] text-[32px] pt-[15px] pb-[20px] font-arial font-bold"
            style="background-position: 0 0">Questions about your samples?</h2>
        <small class="text-[16px] text-[ #13132f] font-arial">Call our expert customer service team today on:</small>
        <img class="w-[29px] h-[20px] relative mobile-only:inline-block bottom-[-55px] left-[152px] w-[30px] h-[29px] Tab-only:left-[38spx] Tab-only:bottom-[-56px]"
            src="../assets/sample-phone-receiver.png" alt="" />
        <h2 class="text-[#333072] mt-[0px] mb-[0px] text-[32px] pt-[15px] pb-[20px] font-arial font-bold">01782 223822
        </h2>

    </div>
    <!-- <div id="popup1" class="overlay-popup fixed top-[0px] bottom-[0px] left-[0px] right-[0px] block z-999" onclick="closePopup()">
            <div class="sample-popup">
                <a onclick="closePopup()" href="javascript:void(0);" class="close text-[#888] relative no-underline cursor-pointer">×</a>
                <iframe id="popup_img" width="100%" height="315" src="" frameborder="0" allowfullscreen="" data-gtm-yt-inspected-12="true"></iframe>
            </div>
        </div> -->
</div>
</div>
    </div>

</template>

<script>
export default {
  name: "freecut-section2",
};
</script>

<style></style>
