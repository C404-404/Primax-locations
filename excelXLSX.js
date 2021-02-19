/*handleFileLoad = (e) => {
    if (e.target.files.length > 0) {
        try {
            this.setState({ operationInProgress: true, fileLoadProgress: 0 });
            let file = e.target.files[0];
            let reader = new FileReader();
    
            reader.onload = async function (e) {
                let data = new Uint8Array(e.target.result);
                let workbook = XLSX.read(data, { type: "array" });
                let worksheet = workbook.Sheets[workbook.SheetNames[0]];
                let sheet = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    
                let dataset = await this.parseFileContent(sheet);
                this.setState({ 
                    dataset: dataset,
                    fileLoaded: true,
                    fileName: file.name,
                    operationInProgress: false
                });
            }.bind(this);
            reader.readAsArrayBuffer(file);
        } catch (exception) {
            this.setState({
                fileLoaded: false,
                fileName: "",
                operationInProgress: false
            });
        }
    } else {
        toast("No files found", { type: "error" });
    }
};*/

function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}

