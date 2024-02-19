// scroll
document.getElementById('scrollButton').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

function setBackgroundColorById(elementId)
{
    const element= document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}
const allSeat= document.getElementsByClassName('seat-select');
let count=0;
let counT=8;
let fare=0;
let grandTotal=0;
let grand=0;
let discount = 0;
let newTotal=0;
let currentTotal=0;
for(const seat of allSeat){
    seat.addEventListener('click', function(e){
        count= count+1;
        counT=counT-1;
        fare=count*550;
        if(count>4){
            false;
        }
        else{
            setInnertext('count-seat',count);
            seat.classList.add('bg-green-500');
        }
        if(counT<0){
            false;
        }
        else{
            setInnertext('seat-left',counT);
        }
        setInnertext('fare-est',fare);
        setInnertext('fare-total',fare);
        const className='economy'
        setInnertext('fare-class', className);

        grandTotal= document.getElementById('couponInput');
        if(grandTotal===15){
            grandTotal=fare-(0.15*fare);
        }
        else if(grandTotal==="Couple20"){
            grandTotal= fare-(0.20*fare);
        }
        else{
            false;
        }
        setInnertext('grandTotal',grandTotal);

    })
}

function setInnertext(id,value){
    document.getElementById(id).innerText=value;
}

function hideElementById(elementId){
    const element= document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element= document.getElementById(elementId);
    element.classList.remove('hidden');
}

function next()
{
    showElementById('success');
    hideElementById('landingPage');
    

}