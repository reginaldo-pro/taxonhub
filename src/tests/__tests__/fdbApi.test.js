import getTaxon from '../../floraDoBrasil/FDBApi.js';

let taxonNameTest = {
    values: [
        {
            scientificname: 'Tabernaemontana flavicans Willd. ex Roem. & Schult.',
            synonymsList:
                [
                    {
                        "taxonid": "40869",
                        "family": "Apocynaceae",
                        "genus": "Anartia",
                        "scientificname": "Anartia flavicans (Willd. ex Roem. & Schult.) Miers",
                        "specificepithet": "flavicans",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "(Willd. ex Roem. & Schult.) Miers",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Anartia Miers;Anartia flavicans (Willd. ex Roem. & Schult.) Miers",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB40869\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB40869</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB40869"
                    },
                    {
                        "taxonid": "40872",
                        "family": "Apocynaceae",
                        "genus": "Anartia",
                        "scientificname": "Anartia oblongifolia (A.DC.) Markgr.",
                        "specificepithet": "oblongifolia",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "(A.DC.) Markgr.",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Anartia Miers;Anartia oblongifolia (A.DC.) Markgr.",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB40872\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB40872</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB40872"
                    },
                    {
                        "taxonid": "40870",
                        "family": "Apocynaceae",
                        "genus": "Anartia",
                        "scientificname": "Anartia glabrata Miers",
                        "specificepithet": "glabrata",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "Miers",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Anartia Miers;Anartia glabrata Miers",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB40870\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB40870</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB40870"
                    },
                    {
                        "taxonid": "41045",
                        "family": "Apocynaceae",
                        "genus": "Bonafousia",
                        "scientificname": "Bonafousia latiflora Miers",
                        "specificepithet": "latiflora",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "Miers",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Bonafousia A.DC.;Bonafousia latiflora Miers",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB41045\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB41045</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB41045"
                    },
                    {
                        "taxonid": "41054",
                        "family": "Apocynaceae",
                        "genus": "Bonafousia",
                        "scientificname": "Bonafousia oblongifolia (A.DC.) Miers",
                        "specificepithet": "oblongifolia",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "(A.DC.) Miers",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Bonafousia A.DC.;Bonafousia oblongifolia (A.DC.) Miers",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB41054\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB41054</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB41054"
                    },
                    {
                        "taxonid": "41055",
                        "family": "Apocynaceae",
                        "genus": "Bonafousia",
                        "scientificname": "Bonafousia olivacea (Müll.Arg.) Miers",
                        "specificepithet": "olivacea",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "(Müll.Arg.) Miers",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Bonafousia A.DC.;Bonafousia olivacea (Müll.Arg.) Miers",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB41055\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB41055</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB41055"
                    },
                    {
                        "taxonid": "41959",
                        "family": "Apocynaceae",
                        "genus": "Taberna",
                        "scientificname": "Taberna disparifolia Miers",
                        "specificepithet": "disparifolia",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "Miers",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Taberna Miers;Taberna disparifolia Miers",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB41959\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB41959</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB41959"
                    },
                    {
                        "taxonid": "42024",
                        "family": "Apocynaceae",
                        "genus": "Tabernaemontana",
                        "scientificname": "Tabernaemontana oblongifolia A.DC.",
                        "specificepithet": "oblongifolia",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "A.DC.",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Tabernaemontana L.;Tabernaemontana oblongifolia A.DC.",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB42024\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB42024</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB42024"
                    },
                    {
                        "taxonid": "42026",
                        "family": "Apocynaceae",
                        "genus": "Tabernaemontana",
                        "scientificname": "Tabernaemontana olivacea Müll.Arg.",
                        "specificepithet": "olivacea",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "Müll.Arg.",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Tabernaemontana L.;Tabernaemontana olivacea Müll.Arg.",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB42026\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB42026</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB42026"
                    },
                    {
                        "taxonid": "40873",
                        "family": "Apocynaceae",
                        "genus": "Anartia",
                        "scientificname": "Anartia olivacea (Müll.Arg.) Markgr.",
                        "specificepithet": "olivacea",
                        "infraspecificepithet": null,
                        "scientificnameauthorship": "(Müll.Arg.) Markgr.",
                        "taxonomicstatus": "SINONIMO",
                        "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Anartia Miers;Anartia olivacea (Müll.Arg.) Markgr.",
                        "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=\"http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB40873\">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB40873</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
                        "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB40873"
                    }
                ],
        }
    ],
}

test('Teste pesquisando com a api com o nome cientifico: Tabernaemontana flavicans Willd. ex Roem. & Schult.', async () => {
    const result = await getTaxon('Tabernaemontana flavicans Willd. ex Roem. & Schult.');
    //console.log(taxonNameTest);scientificname

    expect(result).toStrictEqual(taxonNameTest);
});

let taxonNameNull = {
    values: []
};

test('Teste pesquisando com a api com o nome cientifico: null', async () => {
    // primeiro busco pelo termo: null para comparar com os resultados esperados
    const result = await getTaxon(null);

    // verificação: result
    expect(result).toStrictEqual(taxonNameNull);
});

test('Teste pesquisando com a api com o nome cientifico: null', async () => {
    try {
        // primeiro busco pelo termo: null para comparar com os resultados esperados
        const result = await getTaxon('');

    } catch (error) {
        // verificação da mensagem erro
        expect(error.message).toBe('Error: Website response error with status: 404');
    }
});

let taxonNameNumber = {
    values: []
};

test('Teste pesquisando com a api com o nome cientifico: 98', async () => {
    // primeiro busco pelo termo: 98 para comparar com os resultados esperados
    const result = await getTaxon(98);

    // verificação: result
    expect(result).toStrictEqual(taxonNameNumber);
});

let taxonNameNumberLetter = {
    values: []
};

test(`Teste pesquisando com a api com o nome cientifico: 'A98A'`, async () => {

    // primeiro busco pelo termo: null para comparar com os resultados esperados
    const result = await getTaxon('A98A');

    // verificação: result
    expect(result).toStrictEqual(taxonNameNumberLetter);

});

let taxonNameSpecialLetter = {
    values: []
};

test(`Teste pesquisando com a api com o nome cientifico: ';'`, async () => {
    // primeiro busco pelo termo: ';' para comparar com os resultados esperados
    const result = await getTaxon(';');

    // verificação: result
    expect(result).toStrictEqual(taxonNameSpecialLetter);

});

let taxonNameLarge = {
    values: []
};

test(`Teste pesquisando com a api com o nome cientifico: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis ultricies nisi, sed dignissim ante. Cras et molestie eros, in consectetur magna. Vivamus a dui quis lorem ullamcorper mollis. Duis condimentum libero sit amet laoreet varius. Nullam pharetra nunc a dolor feugiat sagittis. Maecenas pharetra, est sed eleifend eleifend, enim metus laoreet quam, quis vehicula libero mi sit amet augue. Maecenas ullamcorper justo vitae efficitur scelerisque. Pellentesque suscipit dignissim odio sed posuere.Integer pellentesque, velit vel tincidunt tristique, massa enim suscipit libero, eget bibendum sem est in tortor. Pellentesque sed nisl urna. Vivamus dictum risus a massa pharetra, dapibus tincidunt turpis rhoncus. Aenean elit mi, fermentum in nisl non, aliquet aliquet enim. Vestibulum aliquet, dolor ut ultricies dignissim, odio sem aliquam risus, in congue mi enim vel tellus. Vestibulum vehicula auctor hendrerit. Nam consequat mollis tellus sed lobortis.'`, async () => {
    // primeiro busco pelo termo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis ultricies nisi, sed dignissim ante. Cras et molestie eros, in consectetur magna. Vivamus a dui quis lorem ullamcorper mollis. Duis condimentum libero sit amet laoreet varius. Nullam pharetra nunc a dolor feugiat sagittis. Maecenas pharetra, est sed eleifend eleifend, enim metus laoreet quam, quis vehicula libero mi sit amet augue. Maecenas ullamcorper justo vitae efficitur scelerisque. Pellentesque suscipit dignissim odio sed posuere.Integer pellentesque, velit vel tincidunt tristique, massa enim suscipit libero, eget bibendum sem est in tortor. Pellentesque sed nisl urna. Vivamus dictum risus a massa pharetra, dapibus tincidunt turpis rhoncus. Aenean elit mi, fermentum in nisl non, aliquet aliquet enim. Vestibulum aliquet, dolor ut ultricies dignissim, odio sem aliquam risus, in congue mi enim vel tellus. Vestibulum vehicula auctor hendrerit. Nam consequat mollis tellus sed lobortis.' para comparar com os resultados esperados
    const result = await getTaxon('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis ultricies nisi, sed dignissim ante. Cras et molestie eros, in consectetur magna. Vivamus a dui quis lorem ullamcorper mollis. Duis condimentum libero sit amet laoreet varius. Nullam pharetra nunc a dolor feugiat sagittis. Maecenas pharetra, est sed eleifend eleifend, enim metus laoreet quam, quis vehicula libero mi sit amet augue. Maecenas ullamcorper justo vitae efficitur scelerisque. Pellentesque suscipit dignissim odio sed posuere.Integer pellentesque, velit vel tincidunt tristique, massa enim suscipit libero, eget bibendum sem est in tortor. Pellentesque sed nisl urna. Vivamus dictum risus a massa pharetra, dapibus tincidunt turpis rhoncus. Aenean elit mi, fermentum in nisl non, aliquet aliquet enim. Vestibulum aliquet, dolor ut ultricies dignissim, odio sem aliquam risus, in congue mi enim vel tellus. Vestibulum vehicula auctor hendrerit. Nam consequat mollis tellus sed lobortis.');

    // verificação: result
    expect(result).toStrictEqual(taxonNameLarge);

});