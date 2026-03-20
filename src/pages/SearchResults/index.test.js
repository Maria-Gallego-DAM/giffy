import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "./index";
import {GifsContextProvider} from "../../context/GifsContext";

test('search show gifs when used', async () =>{
    render(<GifsContextProvider><Search params={{keyword: 'Varka'}}/></GifsContextProvider>)

    const gifs = await screen.findAllByRole('img');
    const title = await screen.findByText('Varka');

    expect(title).toBeVisible();
    expect(gifs[0]).toBeVisible();
})

