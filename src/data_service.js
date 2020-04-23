import React from 'react';

class MyService extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            error:  null,
            isLoaded: false,
            items: []
        };
        this.updateThis = this.updateThis.bind(this);
    }

    updateThis(){
        console.log("in updatethis");
        let x = Math.floor(Math.random() * 2162);
        let basePath= 'strainapi.evanbusse.com/TRemnZk/strains/data/desc/';
        let fullPath = basePath.concat(x);
        fullPath = ("http://" + fullPath);
        console.log(fullPath);

        fetch(fullPath)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        items: result.desc,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }

    componentDidMount(){
        console.log("in mount");
        let x = Math.floor(Math.random() * 2162);
        let basePath= 'strainapi.evanbusse.com/TRemnZk/strains/data/desc/';
        let fullPath = basePath.concat(x);
        fullPath = ("http://" + fullPath);
        console.log(fullPath);
        setInterval(() => {
            this.updateThis();
        }, 5000);

        fetch(fullPath)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        items: result.desc,
                        isLoaded: true
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render(){
        const { error, isLoaded, items } = this.state;
        console.log(this.state);
        if( error) {
             return <div><p>{error.message}</p></div>;
        } else if( !isLoaded ){
            return <div>LOADING..</div>;
        }else{
            
            return(
                <div>
                    <p className="nav_p">{items}</p>
                </div>
            )
        }
    }
}

export default MyService;
