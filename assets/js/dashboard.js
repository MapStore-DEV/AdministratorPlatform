console.log("DASHBOARD");

template_head = `
<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
<div class="card store-card" style="width: 18rem;">
<img class="card-img-top" src="assets/img/store-icon.png" alt="Card image cap">
<div class="card-body">
<h5 class="card-title">`
template_body = `</h5>
<p class="card-text">Marketplace with an existent map.</p>
<a href="https://mapstore.tech/AdministratorPlatform/MapBuilder/mapbuilder.html?hash=`
template_body2=`" class="btn btn-primary" id="edit-buton">Edit</a>
<a href="#" class="btn btn-primary" id="generate-qr-buton" onclick="receive_qr('`
template_foot = `')">QR Code</a>
<a href="#" class="btn btn-danger">Delete</a></div></div></div>
`

$.ajax({
    type: 'POST',
    url: 'https://mapstore.tech/api/api.php',
    dataType: 'text', 
    cache:false,
    data: {
        q : 'g02mO6i6vUnNXN3At8mB' 
    },
    success: function(response){ 
        console.log(response);
        response = JSON.parse(response);
        for (const property in response) {
            $("#markets_dashboard").append($(template_head+property+template_body+response[property]+template_body2+response[property]+template_foot));
        }
        $("#markets_dashboard").append($(`
        <div class="text-center col-xl-3 col-lg-4 col-md-6 col-sm-12" id="btn-add-store">
        <a href="MapBuilder/mapbuilder.html">
        <button type="button" class="btn btn-danger btn-circle btn-xl"><img src="assets/icons/plus.png" width="40px"></button> 
        </a>
        </div>"
        `));
    },
    error: function (request, status, error) {
        alert(request.responseText);
    }
});

function receive_qr(hash)
{
    console.log("QR Code for map:"+hash);
    $.ajax({
        type: 'POST',
        url: 'https://mapstore.tech/api/api.php',
        dataType: 'text', 
        cache:false,
        data: {
            q : '6phXdNQ9kpBqi5cLHmqH',
            p :  hash
        },
        success: function(response){ 
            console.log(response);
            response = response.split('\n');
            response = response[response.length -1];
            console.log('>>'+response);
            $("#the_qr").attr("src","../../"+response);
            $('#qr_preview').click();
        },
        error: function (request, status, error) {
            alert(request.responseText);
        }
    }); 
}
