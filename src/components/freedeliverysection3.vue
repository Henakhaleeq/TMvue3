<template>
<div class="bg-[#F5F4F4]">
    <div class="container text-[16px] box-border ml-auto mr-auto pr-[8px] pl-[8px]">
        <div class="inline float-left ml-[1%] mr-[1%] w-[98%] Tab-only:ml-[0%] Tab-only:mr-[0%]">
            <div class="w-[46%] inline float-left ml-[1%] mr-[1%] Tab-only:w-[100%] mobile-only:w-[100%]">
                <h3 class="text-[26px] text-[#29265a] font-arial m-[0px] mb-[10px] font-bold Tab-only:text-[18px] Tab-only:text-start mobile-only:text-[16px] mobile-only:text-[18px] mobile-only:text-start">Shipping Rates</h3>
                <table class="w-[100%] border-collapse text-left">
                    <thead>
                        <tr class="border-b-2 border-white border-r-2 border-white text-[#fff]">
                            <th class="border-r-2 border-white text-center text-[12px] bg-[#29265a] pt-[12px] pb-[12px] pl-[5px] pr-[5px] font-normal text-[#fff]"
                                colspan="1">Delivery Prices</th>

                            <th class="border-r-2 border-white text-center text-[12px] bg-[#29265a] pt-[12px] pb-[12px] pl-[5px] pr-[5px] font-normal text-[#fff]"
                                colspan="2">Parcel Orders (upto 15KG)</th>

                            <th class="border-r-2 border-white text-center text-[12px] bg-[#29265a] pt-[12px] pb-[12px] pl-[5px] pr-[5px] font-normal text-[#fff]"
                                colspan="2">Pallet Orders (over 15KG)</th>

                        </tr>
                        <tr class="text-[#fff]">
                            <th
                                class="border-r-2 border-white text-center text-[12px] bg-[#29265a] pt-[12px] pb-[12px] pl-[5px] pr-[5px] font-normal text-[#fff]">
                                Postcode zone</th>
                            <th
                                class="border-r-2 border-white text-center text-[12px] bg-[#29265a] pt-[12px] pb-[12px] pl-[5px] pr-[5px] font-normal text-[#fff]">
                                Under £299</th>
                            <th
                                class="border-r-2 border-white text-center text-[12px] bg-[#29265a] pt-[12px] pb-[12px] pl-[5px] pr-[5px] font-normal text-[#fff]">
                                Over £299</th>
                            <th
                                class="border-r-2 border-white text-center text-[12px] bg-[#29265a] pt-[12px] pb-[12px] pl-[5px] pr-[5px] font-normal text-[#fff]">
                                Under £299</th>
                            <th
                                class="border-r-2 border-white text-center text-[12px] bg-[#29265a] pt-[12px] pb-[12px] pl-[5px] pr-[5px] font-normal text-[#fff]">
                                Over £299</th>
                        </tr>
                    </thead>
                    <tbody class="first-tbody">
                        <tr class="border-b border-solid border-gray-200">
                            <td
                                class="border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center leading-4.5 pt-[12px] pr-[0px] pb-[12px] pl-[8px]">
                                Zone 1<br><span class="text-[#53565a] text-[12px] text-center leading-tight">(Most of
                                    Mainland
                                    England and Wales)</span></td>
                            <td class="bg-[#f2f2f2] text-[#53565a] text-[12px] pt-[12px] pb-[12px] pl-[5px] pr-[5px] font-bold border-2 border-solid border-white  border-l-[0px] text-center">£11.99</td>
                            <td class="bg-[#f2f2f2] text-[#53565a] text-[12px] pt-[12px] pb-[12px] pl-[5px] pr-[5px] font-bold border-2 border-solid border-white  border-l-[0px] text-center">FREE</td>
                            <td class="pt-[38px] pb-[38px] pl-[0px] pr-[0px] border-2 border-solid border-white  border-l-[0px] bg-[#f2f2f2] text-center text-[#53565a] text-[12px] font-bold">£29.99</td>
                            <td class="text-center border-2 border-solid border-white  border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] pt-[12px] pb-[12px] pl-[5px] pr-[5px] font-bold ">FREE</td>
                        </tr>

                    </tbody>
                    <tbody class="second-tbody lower">
                        <tr class="border-b-2 border-solid border-gray-300">
                            <td class="pl-[8px] pt-[30px] pb-[30px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center leading-5">Zone 2 <br>
                                <span class="text-[#53565a] text-[12px] text-center leading-tight">(DG,EH,EX,FK,G,KY,ML,PL,SA,TA,TD)</span>
                            </td>
                            <td class="pt-[30px] pb-[30px] pl-[0px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center font-bold">£14.99</td>
                            <td class="pt-[30px] pb-[30px] pl-[0px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center font-bold">4.99</td>
                            <td class="pt-[30px] pb-[30px] pl-[0px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center font-bold">£49.99</td>
                            <td class="pt-[30px] pb-[30px] pl-[0px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center font-bold">£19.99</td>
                        </tr>
                        <tr>
                            <td class="pl-[8px] pt-[30px] pb-[30px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center leading-5">Zone 3 <br>
                                <span class="text-[#53565a] text-[12px] text-center leading-tight">(AB,BT,DD,IV,PO,TR)</span>
                            </td>
                            <td class="pt-[30px] pb-[30px] pl-[0px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center font-bold">£19.99</td>
                            <td class="pt-[30px] pb-[30px] pl-[0px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center font-bold">9.99</td>
                            <td class="pt-[30px] pb-[30px] pl-[0px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center font-bold">£79.99</td>
                            <td class="pt-[30px] pb-[30px] pl-[0px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center font-bold">£49.99</td>
                        </tr>
                        <tr>
                            <td class="pl-[8px] pt-[30px] pb-[30px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center leading-5">Zone 4 <br>
                                <span class="text-[#53565a] text-[12px] text-center leading-tight">(HS,IM,KA,KW,PA,PH,ZE)</span>
                            </td>
                            <td class="pt-[30px] pb-[30px] pl-[0px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center font-bold">£29.99</td>
                            <td class="pt-[30px] pb-[30px] pl-[0px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center font-bold">£14.99</td>
                            <td class="pt-[30px] pb-[30px] pl-[0px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center font-bold">£124.99</td>
                            <td class="pt-[30px] pb-[30px] pl-[0px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center font-bold">£99.99</td>
                        </tr>
                        <tr>
                            <td class="pl-[8px] pt-[30px] pb-[30px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center leading-5">*Off shore &amp; Channel Island delieveries <br>
                                <span class="text-[#53565a] text-[12px] text-center leading-tight"></span>
                            </td>
                            <td class="pt-[30px] pb-[30px] pl-[0px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center font-bold">Calculated at checkout</td>
                            <td class="pt-[30px] pb-[30px] pl-[0px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center font-bold">Calculated at checkout</td>
                            <td class="pt-[30px] pb-[30px] pl-[0px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center font-bold">Calculated at checkout</td>
                            <td class="pt-[30px] pb-[30px] pl-[0px] pr-[0px] border-2 border-solid border-white border-l-[0px] bg-[#f2f2f2] text-[#53565a] text-[12px] text-center font-bold">Calculated at checkout</td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <h3 class="text-[26px] text-[#29265a]  font-arial m-[0px] mb-[10px] font-bold text-start mt-[10px] Tab-only:text-[18px] Tab-only:text-start mobile-only:text-[18px]">Shipping Information</h3>
                    <p class="text-[16px] text-[#58595b] leading-6 text-start mt-[16px] mb-[16px]">Orders placed before 3pm are available for <strong>next working day delivery</strong> for the
                        majority of postcodes excluding Ireland, Northern Ireland, some Scottish postcodes and offshore
                        islands. Enter your postcode at the checkout for price and lead times.&nbsp;</p>
                    <p class="text-[16px] text-[#58595b] leading-6 text-start mt-[16px] mb-[16px]"><span class="text-[#ff0000] text-[16px]"> <strong>Enter your postcode at the checkout for price and lead
                                times.

                                Please be aware that our delivery service is currently experiencing a short number of
                                delays due to an influx of online orders, driver shortages and coronavirus. We thank you
                                for your patience and understanding in this matter and we apologise for any
                                inconvenience caused. If your order has been delayed, or has failed to arrive, please
                                contact our customer service team who will help to find a solution as soon as
                                possible.</strong> </span></p>
                    <p class="text-[16px] text-[#58595b] leading-6 text-start mt-[16px] mb-[16px]">Orders below 15KG will be sent via parcel courier or through the post. Orders will be dispatched
                        and delivered within 1-2 working days.</p>
                    <p class="text-[16px] text-[#58595b] leading-6 text-start mt-[16px] mb-[16px]">Parcels are sent on a leave safe service, a signature is not required as they can be left with a
                        neighbour, posted through your letterbox or left safe at your property.</p>
                </div>
                <div>
                    <h3 class="text-[26px] text-[#29265a] font-arial m-[0px] mb-[10px] font-bold text-start Tab-only:text-[18px] Tab-only:text-start mobile-only:text-[18px]">Paypal Orders</h3>
                    <p class="text-[16px] text-[#58595b] leading-6 text-start mt-[16px] mb-[16px]">When ordering through PayPal, you will leave our website and the transaction will go through with
                        your <strong>default PayPal address details</strong>. This will override any previous address
                        details entered into our checkout page. Therefore, please <br><strong>change and
                            confirm</strong> the required delivery address within your PayPal account.</p>
                </div>
                <div>
                    <h3 class="text-[26px] text-[#29265a] font-arial m-[0px] mb-[10px] font-bold text-start Tab-only:text-[18px] Tab-only:text-start mobile-only:text-[18px]">Assisted Deliveries</h3>
                    <p class="text-[16px] text-[#58595b] leading-6 text-start mt-[16px] mb-[16px]">Our courier does not offer an assisted delivery service as standard. However, we are happy to
                        look into an alternative premium service tailored to your specific needs upon request, a minimum
                        charge of £80 plus your standard fee will apply.</p>
                </div>
            </div>
            <div class="w-[46%] inline float-left ml-[1%] mr-[1%] Tab-only:w-[100%] mobile-only:w-[100%]">
                <h3 class="text-[26px] text-[#29265a] font-arial m-[0px] mb-[10px] font-bold text-start Tab-only:text-start">Pallet Deliveries</h3>
                <div>
                    <div><img
                            src="https://m2.tilemountain.co.uk/media/wysiwyg/pallet-image-delivery.jpg"
                            alt="pallet delivery" class="Tab-only:w-[100%] mobile-only:w-[100%]"></div>
                    <p class="text-[16px] text-[#58595b] leading-6 text-start mt-[16px] mb-[16px]">Deliveries arrive on an 18-tonne truck with tail-lift and are <strong>strictly to the
                            kerbside</strong>. If your property has restricted access please let us know at the time of
                        ordering via the delivery restrictions comments box. This may incur an additional charge.</p>
                    <p class="text-[16px] text-[#58595b] leading-6 text-start mt-[16px] mb-[16px]"><strong>Hazards or obstructions</strong> e.g. steps, lifts, uneven or gravel paths/driveways may
                        necessitate the delivery being made to an alternative location nearest to the delivery vehicle.
                    </p>
                    <p class="text-[16px] text-[#58595b] leading-6 text-start mt-[16px] mb-[16px]">Goods will not be broken down or discharged by the driver. Take caution when removing all
                        packaging to avoid damages and injury. Please assess the weight of the boxes as tiles can be
                        heavy, precautions may need to be made.</p>
                    <p class="text-[16px] text-[#58595b] leading-6 text-start mt-[16px] mb-[16px]">We reserve the right to apply a flat rate charge of £40 for any re-delivery which exceeds two
                        attempts where the customer is not present to sign for the goods on the arranged day. </p>
                </div>
                <div>
                    <h3 class="text-[26px] text-[#29265a] font-arial m-[0px] mb-[10px] font-bold text-start Tab-only:text-start">Damaged Goods &amp; Cancellations</h3>
                    <div><img
                            src="https://m2.tilemountain.co.uk/media/wysiwyg/damage-delivery-img.jpg"
                            alt="damage delivery" class="Tab-only:w-[100%] mobile-only:w-[100%]"></div>
                    <p class="text-[16px] text-[#58595b] leading-6 text-start mt-[16px] mb-[16px]"><strong>Check your tiles carefully</strong> when they are delivered for signs of damage. If your
                        tiles are damaged, <strong>sign for as damaged and take a photo</strong> whilst on the pallet
                        prior to unloading.</p>
                    <p class="text-[16px] text-[#58595b] leading-6 text-start mt-[16px] mb-[16px]">Call us to report damage within 24 hours of receiving your pallet. Please note, that only one
                        claim for damages can be accepted per order.</p>
                    <p class="text-[16px] text-[#58595b] leading-6 text-start mt-[16px] mb-[16px]">Once an order has been dispatched from our warehouse and is in the care of the courier, you will
                        receive a dispatch email. The order is then unable to be amended. Therefore please ensure that
                        delivery dates, addresses and items are correct prior to dispatch. Please assess the weight of
                        the boxes as tiles can be heavy, precautions may need to be made.</p>
                    <p class="text-[16px] text-[#58595b] leading-6 text-start mt-[16px] mb-[16px]">If an order is cancelled after dispatch or the delivery is refused, there will be a flat rate
                        charge of £40 per pallet for the order to be returned to us.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "freedelivery-section3",
    };
</script>

<style></style>