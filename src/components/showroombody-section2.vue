<template>
    <div id="breadcrumbs-show" class="breadcrumbs breadcumbs-old bg-transparent pt-[15px] pb-[12px] px-[0px] float-left w-[100%] mobile-only:hidden">
        <div class="container box-border ml-auto mr-auto pr-[8px] pl-[8px]">
            <ul class="flex list-none p-[0px] mb-[0px] pl-[22px]">
                <li class="inline;">
                    <a href="/" title="Go to Home Page"
                        class="block float-left text-[12px] text-[#7bd3c7] font-arial">Home</a>
                    <span
                        class="w-[7px] h-[5px] mt-[6px] mr-[4px] mb-[0px] ml-[4px] block float-left bg-url[('../assets/pix.png')] bg-left bg--129 bg-no-repeat text-indent--9999 overflow-hidden">/
                    </span>
                </li>
                <li class="cms_page pl-[4px] inline">
                    <strong class="font-normal block text-[12px] font-arial text-[#58595b] capitalize">Delivery
                        Information</strong>
                </li>
            </ul>
        </div>
    </div>
   
</template>

<script>
    export default {
        name: "showroombody-section1",
        methods: {
            alertFunction() {
                alert("I am an alert box!");
            }
        }
    }
</script>
<style>

</style>