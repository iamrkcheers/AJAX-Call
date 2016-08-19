function doAjax(method,js,params){
    var promise=new Promise(function(resolve,reject){
        //alert("Hello !");
        var req=new window.XMLHttpRequest();
        req.open(method,js,true);
        req.send(params);
        req.onload=function(){
            alert("Hello !");
            if(req.status==200){
                //alert("Hello !");
                resolve(req.response);
            }
            else
                reject(Error(req.statusText));
        }
    });
    return promise;
}