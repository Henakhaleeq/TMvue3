<template>
    <div class="container flex mt-[50px] box-border ml-[auto] mr-[auto] pr-[8px] pl-[8px]">
        <div class="row box-border flex flex-row mr-[-8px] ml-[-8px] mobile-only:block">
            <div class="RegisterDetails col-md-6 col-xs-12 w-1/2 max-w-[50%] mobile-only:max-w-[100%] mobile-only:w-[100%] mobile-only:pl-[22px] mobile-only:pr-[22px]">
                <h1 class="text-[40px] font-Arial font-bold text-[#29275b] text-start Tab-only:text-[22px] mobile-only:text-[22px]">Login or Create an Account</h1>
                <div class="newCustomers pl-[0px] max-w-[100%]">
                    <h4 class="newCustomers1 text-[#737374] font-arial text-[18px] mt-[32px] mb-[0px] text-start font-bold Tab-only:text-[14px] mobile-only:text-[15px]">New Customers</h4>
                    <p class="text-[18px] text-[#6b6b6c] leading-9 text-justify mt-[18px] mb-[18px] Tab-only:text-[12px] Tab-only:text-initial Tab-only:leading-[2] Tab-only:w-[95%] mobile-only:text-[14px] mobile-only:mb-[0px]">
                        By creating an account with our store, you will be able to move
                        through the checkout process faster, store multiple shipping
                        addresses, view and track your orders in your account and more.
                    </p>
                </div>
                <div class="CreateAccountButton pt-[36px] pb-[36px] pl-[0px] pr-[0px] max-w-[100%] text-start mobile-only:pt-[13px] mobile-only:pb-[36px] mobile-only:pl-[0px] mobile-only:pr-[0px]"><a
                        href="/customer/account/create"
                        class="block w-[50%] bg-[#7f77a7] text-[#ffffff] text-[19px] p-[19.5px] font-bold rounded-md text-center font-arial min-w-[250px] cursor-pointer reltive overflow-hidden border-none Tab-only:text-[16px Tab-only:p-[10px] mobile-only:p-[14px] mobile-only:text-[12px] mobile-only:min-w-[170px] mobile-only:p-[14px] mobile-only:text-[12px] mobile-only:w-[35%]"
                        data-testid="subscribeSubmit">Create an Account</a></div>
            </div>
            <div class="LoginDetails w-1/2 max-w-[50%] mobile-only:pl-[22px] mobile-only:pr-[22px] mobile-only:max-w-[100%] mobile-only:w-[100%]">
                <div class="LoginForm w-[100%] max-w-[568px] float-right mb-[100px]">
                    <header class="modal-header h1 serif weight-700 bg-cl-secondary text-[27px] items-center justify-between text-start font-arial font-bold bg-[#29275b] rounded-tl-[10px] rounded-tr-[10px] text-[#ffffff] p-[26px] Tab-only:text-[20px] Tab-only:w-[100%] Tab-only:p-[22px] mobile-only:p-[22px] mobile-only:text-[14px] mobile-only:pl-[21px] mobile-only:w-[100%] box-border">
                        Registered Customers
                        <!---->
                    </header>
                    <!---->
                    <div class="border-4 border-gray-300 max-w-[100%] border-t-none rounded-lg rounded-tl-none rounded-tr-none pl-[36px] pr-[36px] pt-[20px] pb-[26px] bg-[#fff] text-[#828282] Tab-only:pt-[8px] Tab-only:pr-[20px] Tab-only:pl-[20px] Tab-only:pb-[8px] mobile-only:pl-[16px] mobile-only:pr-[16px] mobile-only:pb-[20px]">
                        <p class="text-[17px] text-[#6b6b6c] font-arial pb-[40px] text-start mobile-only:text-[14px]">If you already have an account with us, please
                            log in.</p>
                        <form novalidate="novalidate">
                            <div class="min-h-[24px] mb-[10px] relative">
                                <div class="relative"><input type="email"
                                        name="email" autocomplete="" placeholder=""
                                        class="w-[100%] border-box brdr-none brdr-bottom-1 brdr-cl-primary h4 sans-serif empty bg-[#ebebeb] border border-1 border-solid border-gray-200 p-[28.5px] font-arial text-[18px] h-[44px] leading-11 Tab-only:p-[18px] mobile-only:p-[10px]">
                                    <label class="text-[14px] top-[-27px] text-[#6b6b6c] font-bold font-arial absolute left-[0px] Tab-only:text-[14px] mobile-only:text-[14px]">Email address</label></div>
                                <!---->
                                <div><span  
                                        data-testid="errorMessage" class="text-start pb-[21px] text-[12px] mt-[8px] block text-[#eb5757]">
                                        Field is required.
                                    </span>
                                    <!---->
                                </div>
                            </div>
                            <div class="min-h-[24px] mb-[10px] relative">
                                <div class="relative"><input type="password"
                                        name="password" autocomplete="" placeholder=""
                                        class="w-[100%] border-box brdr-none brdr-bottom-1 brdr-cl-primary h4 sans-serif empty bg-[#ebebeb] border border-1 border-solid border-gray-200 p-[28.5px] font-arial text-[18px] h-[44px] leading-11 Tab-only:p-[18px] mobile-only:p-[10px]">
                                    <label class="text-[14px] top-[-27px] text-[#6b6b6c] font-bold font-arial absolute left-[0px] Tab-only:text-[16px] mobile-only:text-[14px]">Password </label></div> <button 
                                    type="button" aria-label="Toggle password visibility"
                                    title="Toggle password visibility"
                                    class="icon material-icons absolute brdr-none no-outline p0 bg-cl-transparent cl-brdr-secondary pointer hidden right-[6px] top-[10px]">visibility_off</button>
                                <div>
                                    <!---->
                                </div>
                            </div>
                            <div class="row rem-group box-border flex flex-row mr-[-8px] ml-[-8px]">
                                <div class="mb20 remember pl-[8px] mb-[20px]">
                                    <div class="relative"><input type="checkbox"
                                            id="remember" class="m0 no-outline bg-[#ebebeb] border border-gray-200 border-solid p-[28.5px] absolute top-[-9px] left-[0px] outline-none m-[0px] h-[44px] leading-11"> <label 
                                            for="remember" class="pl35 lh30 h4 pointer text-[#6b6b6c] font-bold font-arial leading-6 pl-[28px] text-[14px] cursor-pointer Tab-only:text-[12px] Tab-only:pl-[22px] mobile-only:text-[12px] mobile-only:pl-[19px]">
                                            Remember me
                                        </label></div>
                                    <div></div>
                                </div>
                            </div>
                            <div class="alignnext flex grid gap-4"><button 
                                    type="submit" data-testid="loginSubmit"
                                    class="bg-[#02a89a] w-[100%] text-[#ffffff] text-[19.92px] p-[19.5px] font-bold rounded-md max-w-[308px] font-arial min-w-auto outline-none relative overflow-hidden mb-[20px] block cursor-pointer m-[0px] mobile-only:p-[10px] mobile-only:text-[12px] mobile-only:w-[50%]">
                                    Login
                                </button>
                                <!---->
                            </div>
                        </form>
                        <div class="relative flex max-w-[100%] items-center justify-end text-end box-border pr-[8px] pl-[8px]">
                            <div><a href="/forgetpassword" class="text-[16px] font-Arial font-bold text-[#4f4f4f] relative no-underline Tab-only:text-[13px] mobile-only:text-[13px]">
                                    Forgot Your Password?
                                </a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login-section",
        methods: {
            alertFunction() {
                alert("I am an alert box!");
            }
        }
    }
</script>
<style>
</style>