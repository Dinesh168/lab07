angular.module("Myemp",[])
.filter("myfilter",function()
{
    return function(input,option)
    {
        if(isNaN(option)||(option==""))
        {
            return input;
        }
        else {
        return input.substring(0,option).toUpperCase();
    }}
})
.controller("empCtrl",function($scope)
{
   
    var Company=[
        {Company:'Mahindra',Model:'XUV300',Price:12000,Duration:'3hrs',Servicer_name:'Ramesh',Servicer_experience:5},
        {Company:'Mahindra',Model:'XUV700',Price:16000,Duration:'4hrs',Servicer_name:'Suresh',Servicer_experience:6},
        {Company:'Kia',Model:'Sonet',Price:10000,Duration:'2hrs',Servicer_name:'Yoga',Servicer_experience:4},
        {Company:'Kia',Model:'Seltos',Price:14000,Duration:'2.5hrs',Servicer_name:'Satish',Servicer_experience:5}, 
        {Company:'Hyndai',Model:'Creata',Price:12000,Duration:'3hrs',Servicer_name:'Alam',Servicer_experience:6},
        {Company:'Hyndai',Model:'Venue',Price:8000,Duration:'2hrs',Servicer_name:'Mahesh',Servicer_experience:3}, 
    ];
    $scope.Company=Company;
    $scope.rowlimit=6;

});
