
// console.log($);
// console.log(jQuery);

// jQuery.noConflict(); 
jQuery.noConflict();
jQuery(document).ready(function ($) {

    // TOPIC id, class, element selector 
    // Type 1 
    jQuery('#btn-id').click(function () {
        console.log("Button with id clicked!!");
    });
    // Type 2 
    jQuery('.btn-class').click(function () {
        console.log(("Button with class clicked!!"));
    });
    // Type 3 
    jQuery('p').click(function () {
        console.log("Element named p tag clicked!!");
    });




    // TOPIC Mouse events 
    // Type 1 
    jQuery('p').click(function () {
        console.log("Element named p tag clicked ka another version!!");
    });
    // Type 2 
    $('p').dblclick(function () {
        console.log("Element named p tag got double clicked !!");
    });
    // Type 3 
    $('p').mouseenter(function () {
        console.log("Mouse entered!!");
    });
    // Type 4 
    $('p').mouseleave(function () {
        console.log("Mouse left");
    });





    // TOPIC Keyboard events 
    // How to click a keyboard letter : KEY press down (click alongwith) + then free the key(ie key up)
    // Type 1 
    let ct = 0;
    $('#name').keypress(function () {
        console.log("keypress");
        ++ct;
        $('#name').blur(function () {
            console.log(`${ct} keys pressed`);
            // ERROR: console.log($('#name').value);
        })
    });
    // Type 2 
    $('#name').keyup(function () {
        alert("mana kia tha na free krne ko, ab maro btc");
        console.log("key up");
    });
    // Type 3 
    let key_down = 0;
    $('#name').keydown(function () {
        console.log("key down");
        ++key_down;
        console.log("ab key choddna nahi fodd dunga tumko");
        if (key_down == 15) {
            alert("Stop this nonsense");
        }
    });





    // TOPIC Form events 
    // Type 1 focus (ie kisi field/tag/class me enter aana)
    $('#fname').focus(function () {
        console.log("aaiye aapka intzaar tha");
        // console.log(this);  
        // TODO why this == $('#fname')[0] 
        $(this).css('border', "5px solid green"); // IMP 
        // TODO enter some dynamic text in cirlce to point here to type inside this box 
        // TODO think some simple actions which can be performed 
    });
    // Type 2 blur 
    $('#fname').blur(function () {
        console.log("chitthi na koi sandesh, jaane wo konsa desh, jaha tum chale gaye, kaha tum chale gaye");
        $(this).css('border', "5px solid aqua");
    });
    // Type 3 submit 
    $('#form-id').submit(function (e) {
        console.log("Form submitted");
        e.preventDefault();
    });

    // TOPIC Window Event 
    // Type1 Resizing 
    $(window).resize(function () {
        console.log("Window resized");
        // TODO think creative todos in responsive ones 
    });




    // TOPIC To get input tags use val(), while for divs etc use text() 
    // IMP : $(selector)[0] -> to grab the element
    // console.log($('#fname')[0].getAttribute('name'));
    // console.log($('#dname').text());
    // console.log($('#color').val());
    // console.log(document.getElementById('dname').textContent, "acha");




    // TOPIC for STYLING use,   css("prop", "val"); if multiple properties, do this multiple times 
    // ERROR jQuery('#fname').style = "border: 10px solid black;";
    // jQuery('#fname').css("color", "green");
    // jQuery('#fname').css("border", "10px solid lightgreen");
    // document.body.style = "margin: 5em;";





    // TOPIC to get border on any element we click 
    // let prev;
    // jQuery('*').click(function () {
    //     // jQuery('*').css("margin", "12px");
    //     // console.log(this.innerText);
    //     jQuery(prev).removeClass('border');
    //     jQuery(this).addClass('border');
    //     prev = this;
    //     // jQuery(this).css("border", "2px solid black");
    //     // jQuery()
    // });




    // BUG 
    // $('#dname').trigger('click');
    // // shorter 
    // $('#dname').click();
    // $('#dname').click(function () {
    //     console.log("Whats up buddy!!");
    // });




    // TOPIC 3 type of immediate browser action commands : prompt(returns its input as string), alert, confirm(returns true if ok, o/w false)
    // var name = prompt("prompt :: Please enter your name");
    // alert("alert - Hello " + name + "! You cant enter text here!");
    // var clickedOk = confirm("confirm ploxx, did you understand now "); 
    // if (!clickedOk) {    
    //      console.log("Please enter your name in box highlighted");
    // }
    // console.log(name, clickedOk);



});