import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

interface ResType {
    id: string;
    name: string;
    country: string;
    lang: string;
}

function App() {
    const [peopleData, setPeopleData] = useState<ResType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios({
                    method: "get",
                    url: "/people",
                });
                console.log(res.data);
                if (res.status === 200) {
                    setPeopleData(res.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            {peopleData.length > 0 ? (
                peopleData.map((item) => (
                    <div key={item.id}>
                        <p>이름 : {item.name}</p>
                        <p>나라 : {item.country}</p>
                        <p>언어 : {item.lang}</p>
                    </div>
                ))
            ) : (
                <p>...로딩중</p>
            )}
        </div>
    );
}

export default App;
