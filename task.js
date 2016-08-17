/**
 * aqiData，存储用户输入的空气指数数据

 */
var aqiData = {};
var cityInput = document.getElementById("aqi-city-input");
var aqiInput = document.getElementById("aqi-value-input");

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = cityInput.value.trim();
    var aqi = aqiInput.value.trim();

    if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert("城市名必须为中英文字符！")
        return;
    }
    if(!aqi.match(/^\d+$/)) {
        alert("空气质量指数必须为整数！")
        return;
    }
    aqiData[city] = aqi;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var items = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for(var city in aqiData){
        items += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button data-city='"+city+"'>删除</button></td></tr>"
    }
    document.getElementById("aqi-table").innerHTML = city ? items : "";
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

function delBtnHandle(city) {
   
    delete aqiData[city];
    renderAqiList();
}

function init() {


    document.getElementById("add-btn").addEventListener("click", addBtnHandle)
   
    document.getElementById("aqi-table").addEventListener("click", function(event){
        if(event.target.nodeName.toLowerCase() === 'button') delBtnHandle.call(null, event.target.dataset.city);
    })
}

init();