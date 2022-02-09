import Axios from "axios";
import React, { useState } from "react";
import { SearchContainer, SearchField, Search, Label, SearchBack, SearchResult, SearchBox, SearchImg, SearchName, State } from "./styles"
import Loading from "../loadingcomponent"
import { useEffect } from "react";



export default function SearchComponent({ Data }) {
    const [state, setState] = useState(State);
    const [valueState, setValueState] = useState("");
    const [searchdata, setSearchData] = useState();
    const [dataSearched, setDataSearched] = useState();

    const [pokeData, setPokeData] = useState()
    const [loading, setLoading] = useState();

    useEffect(() => {
        HandleRequestAPI()
    }, [])

    function HandleRequestAPI(url) {
        if (url) {
            return Axios.get(url).then((Response) => Response.data).catch((err) => console.log(err))
        }
        if (!searchdata) {
            Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1118`).then((Response) => {
                setSearchData(Response?.data?.results)
                console.log(Response.data.results)
            }).catch(err => setSearchData())
        }
    }

    async function HandleChangeValue(e) {
        setValueState(e.target.value);
        let val = e.target.value

        if (val !== undefined && val !== "") {
            if (val.length > 2 && isNaN(parseInt(val))) {
                let datasearchurl = []
                let datasearch = []
                setLoading(true)
                datasearchurl = searchdata?.map(ele => { return ele.name.split(val).length >= 2 && ele.url })
                datasearchurl = datasearchurl.filter(val => val !== false)
                datasearchurl.map(async url => datasearch.push(await HandleRequestAPI(url)))
                setDataSearched(datasearch)
                console.log(datasearch)
                // setDataSearched(await searchdata?.find(ele => ele.name.split(val) >= 2))

                setLoading(false)
            } else {
                let datasearchurl = []
                let datasearch = []
                setLoading(true)
                datasearchurl = searchdata?.map(ele => { return ele.name.split(val).length >= 2 && ele.url })
                datasearchurl = datasearchurl.filter(val => val !== false)
                datasearchurl.map(async url => datasearch.push(await HandleRequestAPI(url)))
                setDataSearched(datasearch)
                console.log(datasearch)
                setLoading(false)
            }
        }
    }

    function HandleChangeState() {
        setState(!state);
        setSearchData();
        setValueState("");
    }

    function HandleSetData() {
        HandleRequestAPI(searchdata?.url);
    }

    return (
        <SearchContainer>

            <SearchField >
                <Label htmlFor="Text"><ion-icon name="search"></ion-icon></Label>
                <Search type="text" id="Text" name="Text" value={valueState} onChange={e => HandleChangeValue(e)} />
            </SearchField>
            <SearchResult>
                {
                    loading && (
                        <Loading />
                    )
                }
                {dataSearched ?
                    dataSearched.map(res => (
                        <SearchBox onClick={() => {
                            HandleSetData();
                            HandleChangeState();
                        }} key={res.id}>
                            <SearchImg
                                src={res.sprites.front_default}
                                alt={res.name}
                                key={res.id + 1}
                            />
                            <SearchName key={res.id + 2}>{res.name}</SearchName>
                        </SearchBox>
                    ))
                    :
                    dataSearched === [] ?
                        (
                            <SearchName>Any pokemon founded</SearchName>
                        )
                        :
                        (
                            <></>
                        )
                }
            </SearchResult>
            <SearchBack onClick={HandleChangeState}>
                <ion-icon name="arrow-undo"></ion-icon>
                Voltar à pesquisa
            </SearchBack>
        </SearchContainer>
    )
}

