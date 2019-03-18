var data = [
    ['Foo', 'programmer'],
    ['Bar', 'bus driver'],
    ['Moo', 'Reindeer Hunter']
];

function download_csv() {
    var csv = '名前,ジョブ\n';
    data.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
    });
    
    //console.log(csv);
    // var hiddenElement = document.createElement('a');
    // hiddenElement.href = 'data:text/csv;charset=utf-8,%EF%BB%BF' + encodeURIComponent(csv);
    // hiddenElement.target = '_blank';
    // hiddenElement.download = 'people.csv';

    // // Required for Mozilla Firefox
    // document.body.appendChild(hiddenElement);
    // hiddenElement.click();
    // document.body.removeChild(hiddenElement);

    var blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
    var url = (window.URL || window.webkitURL);
    var href = url.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = href;
    a.download = 'people.csv';

    // Required for Mozilla Firefox
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
