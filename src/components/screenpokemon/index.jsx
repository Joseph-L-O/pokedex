
import React from 'react';
import {
    DivContainer,
    InfoComponent,
    PokeData,
    PokeDataNImg,
    Img,
    PokeDataTable,
    PokeDataTr,
    PokeDataTh,
    PokeDataTd,
    PokeDataDesc,
} from "./styles"

export default function ScreenPokedex({Data}) {

    return (
        <DivContainer >
            <InfoComponent >
                <label>INFO JOEDEX</label>
            </InfoComponent>
            <PokeData>
                <label>{Data?.name}</label>
            </PokeData>
            {
                Data && (
                    <>
                        <PokeDataNImg >
                            <Img src={data.sprite} alt="" />

                            <PokeDataTable>
                                <PokeDataTr >
                                    <PokeDataTh >
                                        <label>Type</label>
                                    </PokeDataTh>
                                    <PokeDataTd >
                                        <label>{Data?.types.map((res,ind,arr)=>arr.length > 1  && ind === 0 ? (`${res}/`) : (res)   )}</label>
                                    </PokeDataTd>
                                </PokeDataTr>
                                <PokeDataTr >
                                    <PokeDataTh >
                                        <label>Species</label>
                                    </PokeDataTh>
                                    <PokeDataTd >
                                        <label>{Data?.species}</label>
                                    </PokeDataTd>
                                </PokeDataTr>
                                <PokeDataTr >
                                    <PokeDataTh >
                                        <label>Abilities</label>
                                    </PokeDataTh>
                                    <PokeDataTd >
                                        <label>{Data?.abilities.normal}</label>
                                    </PokeDataTd>
                                </PokeDataTr>
                                <PokeDataTr >
                                    <PokeDataTh >
                                        <label>Hidden</label>
                                    </PokeDataTh>
                                    <PokeDataTd >
                                        <label>{Data?.abilities.hidden}</label>
                                    </PokeDataTd>
                                </PokeDataTr>
                                <PokeDataTr >
                                    <PokeDataTh >
                                        <label>Nº on pokedex</label>
                                    </PokeDataTh>
                                    <PokeDataTd >
                                        <label>{Data?.number}</label>
                                    </PokeDataTd>
                                </PokeDataTr>
                                <PokeDataTr >
                                    <PokeDataTh >
                                        <label>Weight</label>
                                    </PokeDataTh>
                                    <PokeDataTd >
                                        <label>{Data?.weight}</label>
                                    </PokeDataTd>
                                </PokeDataTr>
                                <PokeDataTr >
                                    <PokeDataTh >
                                        <label>Height</label>
                                    </PokeDataTh>
                                    <PokeDataTd >
                                        <label>{Data?.height}</label>
                                    </PokeDataTd>
                                </PokeDataTr>
                            </PokeDataTable>
                        </PokeDataNImg>
                        <PokeDataDesc>
                            <label>{Data?.description}</label>
                        </PokeDataDesc>
                    </>
                )
            }
        </DivContainer>
    )
}




const data = [
    {
        "number": "1",
        "name": "Bulbasaur",
        "species": "Seed",
        "types": [
            "Grass",
            "Poison"
        ],
        "abilities": {
            "normal": [
                "Overgrow"
            ],
            "hidden": [
                "Chlorophyll"
            ]
        },
        "eggGroups": [
            "Monster",
            "Grass"
        ],
        "gender": [
            87.5,
            12.5
        ],
        "height": "2'04\"",
        "weight": "15.2 lbs.",
        "family": {
            "id": 1,
            "evolutionStage": 1,
            "evolutionLine": [
                "Bulbasaur",
                "Ivysaur",
                "Venusaur"
            ]
        },
        "starter": true,
        "legendary": false,
        "mythical": false,
        "ultraBeast": false,
        "mega": false,
        "gen": 1,
        "sprite": "https://cdn.traction.one/pokedex/pokemon/1.png",
        "description": "While it is young, it uses the nutrients that are stored in the seeds on its back in order to grow."
    }
]