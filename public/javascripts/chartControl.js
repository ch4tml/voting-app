//module.exports = {
    //createNewChart: (dataSet) => {
        $(document).ready(function(){
            "use strict";
            //var Chart;
                // Get context with jQuery - using jQuery's .get() method.
                var ctx = $("#myChart").get(0).getContext("2d");
                // Get the context of the canvas element we want to select
                //var ctx = document.getElementById("myChart").getContext("2d");

            var myDoughnutChart = new Chart(ctx).Doughnut([], opts);
            function getData(){
                return $.ajax({
                    url: "/api",
                    type: "get"
                });
            }
            
            function handleData(data){
                var myObj = JSON.parse(data);
                console.log(typeof(myObj));
                console.log(myObj);
                data = [];
                console.log(typeof(data));
                myObj.forEach((item) => {
                                let obj = {};
                                obj.label = item.label;
                                obj.colour = item.color;
                                obj.colour = item.highlight;
                                obj.value = item.value;
                                data.push(obj);
                                console.log(Array.isArray(data));
                                console.log(data);
                                console.log(data.length);
                            });
                console.log(typeof(data));
                console.log("Adding data to chart...");
                data = myObj;
                myDoughnutChart.addData(data);
                console.log("Updating...");
                myDoughnutChart.update();
                console.log("Done...");
            }
            
            getData().done(handleData);
            
                /*var data = [];$.get("/api", function(data) {
                        return data;
                    });*/
                    /*$.ajax("/api", {
                        success: function(results) {
                            //results = results.forEach((item) => JSON.parse(item));
                            $("#main").append(results);
                            // TODO
                            // FOR EACH ITEM IN RESULTS, ADD PROPERTIES TO NEW OBJECT AND PUSH NEW OBJECT TO DATA ARRAY
                            console.log(typeof(results));
                            
                            var myObj = JSON.parse(results);
                            console.log(typeof(myObj));
                            console.log(myObj);
                            
                            data = myObj;
                            
                            myDoughnutChart.addData(data);
                            myDoughnutChart.update();
                            
                            /*myObj.forEach((item) => {
                                let obj = {};
                                obj.label = item.label;
                                obj.colour = item.color;
                                obj.highlight = 
                                obj.value = item.value;
                                data.push(obj);
                                console.log(data);
                            });
                          //return results;
                        },
                        error: function() {
                            data.push([{
                                    value: 300,
                                    color:"#F7464A",
                                    highlight: "#FF5A5E",
                                    label: "Red"
                                },
                                {
                                    value: 50,
                                    color: "#46BFBD",
                                    highlight: "#5AD3D1",
                                    label: "Green"
                                },
                                {
                                    value: 100,
                                    color: "#FDB45C",
                                    highlight: "#FFC870",
                                    label: "Yellow"
                                }
                            ]);
                      }
                    });*/
                    
                //dataSet;
                // 16.02.16 Temporarily disabled to pass in db object as data
                /*[
                    {
                        value: 300,
                        color:"#F7464A",
                        highlight: "#FF5A5E",
                        label: "Red"
                    },
                    {
                        value: 50,
                        color: "#46BFBD",
                        highlight: "#5AD3D1",
                        label: "Green"
                    },
                    {
                        value: 100,
                        color: "#FDB45C",
                        highlight: "#FFC870",
                        label: "Yellow"
                    }
                ];*/
                
                var opts = {
                    //Boolean - Whether we should show a stroke on each segment
                    segmentShowStroke : true,
                
                    //String - The colour of each segment stroke
                    segmentStrokeColor : "#fff",
                
                    //Number - The width of each segment stroke
                    segmentStrokeWidth : 2,
                
                    //Number - The percentage of the chart that we cut out of the middle
                    percentageInnerCutout : 50, // This is 0 for Pie charts
                
                    //Number - Amount of animation steps
                    animationSteps : 100,
                
                    //String - Animation easing effect
                    animationEasing : "easeOutBounce",
                
                    //Boolean - Whether we animate the rotation of the Doughnut
                    animateRotate : true,
                
                    //Boolean - Whether we animate scaling the Doughnut from the centre
                    animateScale : false,
                
                    //String - A legend template
                    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
                
                };
                
                    // And for a doughnut chart
            //var myDoughnutChart = new Chart(ctx).Doughnut(data, opts);
        });
    //}
//};