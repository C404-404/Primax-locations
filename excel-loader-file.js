handleFileLoad = (e) => {
    if (e.target.files.length > 0) {
        try {
            this.setState({ operationInProgress: true, fileLoadProgress: 0 });
            let file = e.target.files[0];
            let reader = new FileReader();
    
            reader.onload = async function (e) {
                let data = new Uint8Array(e.target.result);
                let workbook = XLSX.read(data, { type: "array" });
                let worksheet = workbook.Sheets[workbook.SheetNames[0]];
                //let sheet = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    
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
};