


var sitename=document.getElementById('sn');
var siteUrl=document.getElementById('su');

var listSites=[];

if( localStorage.getItem ('listSites')!=null)
{

listSites= JSON.parse(localStorage.getItem('listSites'));
display_sites(listSites);

}

function validation ()  {

    var valNAme=/^[a-z0-9]{4,15}/;
    var valUrl=/^(https:\/\/)?(www\.)?[a-zA-Z0-9_\.]{5,}\.[a-z]{3,}$/;


    
    if(valNAme.test(sitename.value)==false)
    {
    
    return 'your name is invalid';

    }
    
    else if(valUrl.test(siteUrl.value)==false) {
   
    return 'This address is wrong and you must follow the correct address rules, namely (http://www."name site ".com)';

    }
    
    return true
    
    }

function findrepeat()  {

    x=false;
    for( var i=0;i<listSites.length;i++) {

        if(listSites[i].name==sitename.value)
        {
            x=true;
            return x;
        }

    }


    return x;
}


function addSite()  {
    var errorMassage=validation();

    if(errorMassage===true) {
        if(findrepeat()===false) {

                        var site= {
                            name:sitename.value ,
                        urll:siteUrl.value
                            
                            }
                            
                    listSites.push(site);
                    localStorage.setItem('listSites',JSON.stringify(listSites),);

                    formClear();
                    display_sites(listSites);

                            }

            else {

                window.alert('this is repeated sitename ')
            }

                   }

        else {

            window.alert(errorMassage);
        }
    }

 function formClear() {

sitename.value=''
siteUrl.value=''

 }

 function display_sites ( arr )  {    // 1
    
    var cartona='';

                for( var i=0;i<arr.length ;i++ )  {
                    cartona+=`
                    <div class="row ps-5  pt-2 pb-2 clients bg-white">
                    <div class=" clientfont col-2">${i}</div>
                    <div class=" clientfont col-4">${listSites[i].name}</div>
                    <div class=" clientfont col-3"> <a href="${listSites[i].urll}"> <button class="btn btn-success" ><i class="fa-solid fa-eye pe-1 "></i> Visit </button> </a> </div>
                    <div class=" clientfont col-3"> <button onclick="deleteSite(${i})"  class="btn btn-danger" ><i class="fa-solid fa-trash-can pe-1 "></i> Delete </button>  </div>

                    </div>

                    `

                }

                document.getElementById('siteData').innerHTML=cartona;
}

function deleteSite(index) {

    listSites.splice(index,1);
    localStorage.setItem('listSites',JSON.stringify(listSites),);
    display_sites(listSites);
 }