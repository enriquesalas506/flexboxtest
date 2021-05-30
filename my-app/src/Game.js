import React, {Component} from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";


class Game extends Component{


    constructor(props) {
        super(props);
        this.state = {
            listOfBoxes:[],
            flexDirection:null,
            flexWrap:null,
            justifyContent:null,
            alignItems:null,
            alignContent:null,

        };
    }







    box = (item) =>{


        return (
        <div style={{backgroundColor:"red",width:"100px",height:"100px"}}>


            <h1 style={{color:"white"}}> {item} </h1>

        </div>
            )

    }


    menuView = () =>{


        return (<div style={{display:"flex",justifyContent:"flex-start",width:"100%"}}>

            <FormControl variant="filled" >


                <InputLabel htmlFor="outlined-age-native-simple">Align-Content</InputLabel>


                <Select

                    style={{width:"200px",height:"50px"}}
                    label={"Flex-Direction"}
                    onChange={(e) =>{

                        console.log(JSON.stringify(e.target.value));
                        this.setState({alignContent:e.target.value});
                        this.forceUpdate();


                    }}
                    defaultValue={"None"}
                >
                    <MenuItem value="none"><em>None</em></MenuItem>
                    <MenuItem value="flex-start"><em>flex-start</em></MenuItem>
                    <MenuItem value="flex-end"><em>flex-end</em></MenuItem>
                    <MenuItem value="center"><em>center</em></MenuItem>
                    <MenuItem value="stretch"><em>stretch</em></MenuItem>
                    <MenuItem value="space-between"><em>space between</em></MenuItem>
                    <MenuItem value="space-around"><em>space around</em></MenuItem>

                    <MenuItem value="space-around"><em>space evenly</em></MenuItem>

                    <MenuItem value="space-around"><em>stretch</em></MenuItem>




                </Select>

            </FormControl>
            <FormControl variant="filled" >


                <InputLabel htmlFor="outlined-age-native-simple">Align-Items</InputLabel>


                <Select

                    style={{width:"200px",height:"50px"}}
                    label={"Flex-Direction"}
                    onChange={(e) =>{

                        console.log(JSON.stringify(e.target.value));
                        this.setState({alignItems:e.target.value});
                        this.forceUpdate();


                    }}
                    defaultValue={"None"}
                >
                    <MenuItem value="none"><em>None</em></MenuItem>
                    <MenuItem value="flex-start"><em>flex-start</em></MenuItem>
                    <MenuItem value="flex-end"><em>flex-end</em></MenuItem>
                    <MenuItem value="center"><em>center</em></MenuItem>
                    <MenuItem value="stretch"><em>stretch</em></MenuItem>
                    <MenuItem value="baseline"><em>baseline</em></MenuItem>




                </Select>

            </FormControl>


            <FormControl variant="filled" >


                <InputLabel htmlFor="outlined-age-native-simple">Justify Content</InputLabel>


                <Select

                    style={{width:"200px",height:"50px"}}
                    label={"Flex-Direction"}
                    onChange={(e) =>{

                        console.log(JSON.stringify(e.target.value));
                        this.setState({justifyContent:e.target.value});
                        this.forceUpdate();


                    }}
                    defaultValue={"None"}
                >
                    <MenuItem value="none"><em>None</em></MenuItem>
                    <MenuItem value="flex-start"><em>flex-start</em></MenuItem>
                    <MenuItem value="flex-end"><em>flex-end</em></MenuItem>
                    <MenuItem value="center"><em>center</em></MenuItem>
                    <MenuItem value="space-between"><em>space-between</em></MenuItem>
                    <MenuItem value="space-around"><em>space-around</em></MenuItem>
                    <MenuItem value="space-evenly"><em>space-evenly</em></MenuItem>
                    <MenuItem value="start"><em>start</em></MenuItem>
                    <MenuItem value="end"><em>end</em></MenuItem>
                    <MenuItem value="left"><em>left</em></MenuItem>
                    <MenuItem value="right"><em>right</em></MenuItem>



                </Select>

            </FormControl>

            <FormControl variant="filled" >


                <InputLabel htmlFor="outlined-age-native-simple">Flex-Wrap</InputLabel>


                <Select

                    style={{width:"200px",height:"50px"}}
                label={"Flex-Direction"}
                onChange={(e) =>{

                    console.log(JSON.stringify(e.target.value));
                    this.setState({flexWrap:e.target.value});
                    this.forceUpdate();


                }}
                defaultValue={"None"}
            >
                    <MenuItem value="none"><em>None</em></MenuItem>
                    <MenuItem value={"nowrap"}>nowrap</MenuItem>
                    <MenuItem value={"wrap"}>wrap</MenuItem>
                    <MenuItem value={"wrap-reverse"}>wrap-reverse</MenuItem>



                </Select>

            </FormControl>


            <FormControl variant="filled" >


                <InputLabel htmlFor="outlined-age-native-simple">Flex-Direction</InputLabel>


                <Select

                    style={{width:"200px",height:"50px"}}
                    label={"Flex-Direction"}
                    onChange={(e) =>{

                        console.log(JSON.stringify(e.target.value));
                        this.setState({flexDirection:e.target.value});
                        this.forceUpdate();


                    }}
                    defaultValue={"None"}
                >
                    <MenuItem value="none"><em>None</em></MenuItem>
                    <MenuItem value={"row"}>row</MenuItem>
                    <MenuItem value={"row-reverse"}>row-reverse</MenuItem>
                    <MenuItem value={"column"}>column</MenuItem>
                    <MenuItem value={"column-reverse"}>coloumn-reverse</MenuItem>


                </Select>

            </FormControl>


                </div>)

    }

    boxView = () =>{



        this.state.listOfBoxes = [];

        //------------- create boxes
        for (let x = 0; x < 5;x++){


            this.state.listOfBoxes.push(x);

        }




        return (<div style={{border:"10px black",borderStyle:"dashed",width:"1000PX",height:"700px"
            ,flexDirection:this.state.flexDirection,display:"flex"
            ,flexWrap:this.state.flexWrap,justifyContent:this.state.justifyContent,alignItems:this.state.alignItems,alignContent:this.state.alignContent}}>

            {

                this.state.listOfBoxes.map(value => {


                    return (this.box(value));


                })

            }


                 </div>)



    }



    render(){


        return (<div>

            {this.menuView()}

            {this.boxView()}



                </div>)

    }




}


export default Game;

