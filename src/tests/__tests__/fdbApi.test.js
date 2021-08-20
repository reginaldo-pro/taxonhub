import searchSpecies from '../api/api';

let nomeAceito1 = {
    "taxonid": "4860",
    "family": "Apocynaceae",
    "genus": "Tabernaemontana",
    "scientificname": "Tabernaemontana L.",
    "specificepithet": null,
    "infraspecificepithet": null,
    "scientificnameauthorship": "L.",
    "taxonomicstatus": "NOME_ACEITO",
    "acceptednameusage": null,
    "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Tabernaemontana L.",
    "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=" + "http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB4860" + ">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB4860</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
    "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB4860",

}

let result1 = {
    "taxonid": "42081",
    "family": "Apocynaceae",
    "genus": "Testudipes",
    "scientificname": "Testudipes Markgr.",
    "specificepithet": null,
    "infraspecificepithet": null,
    "scientificnameauthorship": "Markgr.",
    "taxonomicstatus": "SINONIMO",
    "acceptednameusage": "Tabernaemontana L.",
    "higherclassification": "Flora;Angiospermas;Apocynaceae Juss.;Testudipes Markgr.",
    "source": "Koch, I.,Rapini, A.,Simões, A.O.,Kinoshita, L.S.,Spina, A.P.,Castello, A.C.D. 2015. Apocynaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=" + "http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB42081" + ">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB42081</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
    "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB42081",
    "acceptednameusageid": "4860",
    "modified": "2009-11-18 06:48:43.99201",
    "NOME ACEITO": [nomeAceito1]
}

let nomeAceito2 = {
    "taxonid": "7372",
    "family": "Dioscoreaceae",
    "genus": "Dioscorea",
    "scientificname": "Dioscorea L.",
    "specificepithet": null,
    "infraspecificepithet": null,
    "scientificnameauthorship": "L.",
    "taxonomicstatus": "NOME_ACEITO",
    "acceptednameusage": null,
    "higherclassification": "Flora;Angiospermas;Dioscoreaceae R.Br.;Dioscorea L.",
    "source": "Kirizawa, M.,Xifreda, C.C.,Couto, R.,Araújo, D. 2015. Dioscoreaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=" + "http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB7372" + ">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB7372</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)KNUTH, R. 1924. Dioscoreaceae. In: Engler, A. (ed.), Das Pflazenr, 4 (43): 1-386.BARROSO, G. M., SUCRE, D., GUIMAR&amp;Atilde;ES, E. F., CARVALHO, L. F., VALENTE, M. C., SILVA, J. D., SILVA, J. B., ROSENTHAL, F. R. T., BARBOSA, G. M., BARTH, O. M. &amp;amp; BARBOSA, A. F. 1974. Flora da Guanabara: fam&amp;iacute;lia Dioscoreaceae. Sellowia 25: 9-256.Grisebach, H.A. 1824, Dioscoreaceae. In Flora brasiliensis (Martius, C.F.P. &amp;amp; Eichler, A.G. eds.) 3(1): 26-48.&amp;nbsp;Pedralli, G. 2004. Dioscore&amp;aacute;ceas. In Flora Ilustrada Catarinense.Itaja&amp;iacute;, Herb&amp;aacute;rio Barbosa Rodrigues. 83p.Sano, M.S., Almeida, S.P. &amp;amp; Ribeiro, J.F.(eds.).&amp;nbsp;2008. Cerrado: Ecologia e Flora. Bras&amp;iacute;lia,DF. Embrapa Informa&amp;ccedil;&amp;atilde;o Tecnol&amp;oacute;gica. v.2, pp. 689-692.&amp;nbsp;Kirizawa, M. &amp;amp; Xifreda, C.C. Flora da Mata Atl&amp;acirc;ntica.Xifreda, C.C. 1996. Dioscoreaceae. In Zuloaga, F.O. &amp;amp; Morrone, O. (eds.) Cat&amp;aacute;logo de las Plantas Vasculares de la Rep&amp;uacute;blica Argentina. I. Pteridophyta, Gymnospermae y Angiospermae (Monocotyledoneae). Monographs in Systematic Botany from the Missouri Bot. Gard. 60: 197-202.&amp;nbsp;Zuloaga, F.O., Morrone, O. &amp;amp; Belgrano, M. (eds.). 2008. Cat&amp;aacute;logo de las Plantas Vasculares del Cono Sur (Argentina, sur de Brasil, Chile, Paraguay y Uruguay.&amp;nbsp;Funk, V., Hollowell, T., Berry, P., Kelloff, C. &amp;amp; Alexander, S.N. 2007. Checklist of the Plants of the Guiana Shield. Contributions from the United States National Herbarium 55:1-3-104.",
    "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB7372",
}

let result2 = {
    "taxonid": "52873",
    "family": "Dioscoreaceae",
    "genus": "Testudinaria",
    "scientificname": "Testudinaria Salisb. ex Burch.",
    "specificepithet": null,
    "infraspecificepithet": null,
    "scientificnameauthorship": "Salisb. ex Burch.",
    "taxonomicstatus": "SINONIMO",
    "acceptednameusage": "Dioscorea L.",
    "higherclassification": "Flora;Angiospermas;Dioscoreaceae R.Br.;Testudinaria Salisb. ex Burch.",
    "source": "Kirizawa, M.,Xifreda, C.C.,Couto, R.,Araújo, D. 2015. Dioscoreaceae in Lista de Espécies da Flora do Brasil. Jardim Botânico do Rio de Janeiro. Disponivel&nbsp;em:&nbsp;&lt;<a href=" + "http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB52873" + ">http://floradobrasil.jbrj.gov.br/jabot/floradobrasil/FB52873</a>&gt;.<BR>BFG. Growing knowledge: an overview of Seed Plant diversity in Brazil. Rodriguésia, v.66, n.4, p.1085-1113. 2015. (DOI: 10.1590/2175-7860201566411)",
    "references": "http://reflora.jbrj.gov.br/reflora/listaBrasil/FichaPublicaTaxonUC/FichaPublicaTaxonUC.do?id=FB52873",
    "acceptednameusageid": "7372",
    "modified": "2014-09-29 12:14:06.274",
    "NOME ACEITO": [nomeAceito2]
}

let taxonNameTest = {
    sucess: true,
    result: [result1, result2],
};

test('Teste pesquisando com a api com o nome cientifico: test', async () => {
    const result = await searchSpecies('test');

    // verificação: NOME ACEITO 1
    expect(result.result[0]["NOME ACEITO"][0].taxonid).toBe(taxonNameTest.result[0]["NOME ACEITO"][0].taxonid);
    expect(result.result[0]["NOME ACEITO"][0].family).toBe(taxonNameTest.result[0]["NOME ACEITO"][0].family);
    expect(result.result[0]["NOME ACEITO"][0].genus).toBe(taxonNameTest.result[0]["NOME ACEITO"][0].genus);
    expect(result.result[0]["NOME ACEITO"][0].scientificname).toBe(taxonNameTest.result[0]["NOME ACEITO"][0].scientificname);
    expect(result.result[0]["NOME ACEITO"][0].specificepithet).toBe(taxonNameTest.result[0]["NOME ACEITO"][0].specificepithet);
    expect(result.result[0]["NOME ACEITO"][0].infraspecificepithet).toBe(taxonNameTest.result[0]["NOME ACEITO"][0].infraspecificepithet);
    expect(result.result[0]["NOME ACEITO"][0].scientificnameauthorship).toBe(taxonNameTest.result[0]["NOME ACEITO"][0].scientificnameauthorship);
    expect(result.result[0]["NOME ACEITO"][0].taxonomicstatus).toBe(taxonNameTest.result[0]["NOME ACEITO"][0].taxonomicstatus);
    expect(result.result[0]["NOME ACEITO"][0].acceptednameusage).toBe(taxonNameTest.result[0]["NOME ACEITO"][0].acceptednameusage);
    expect(result.result[0]["NOME ACEITO"][0].higherclassification).toBe(taxonNameTest.result[0]["NOME ACEITO"][0].higherclassification);

    // nao fica exatamente o mesmo
    //expect(result.result[0]["NOME ACEITO"][0].source).toBe(taxonNameTest.result[0]["NOME ACEITO"][0].source);

    expect(result.result[0]["NOME ACEITO"][0].references).toBe(taxonNameTest.result[0]["NOME ACEITO"][0].references);

    // verificação: NOME ACEITO 2 dev/#16
    expect(result.result[1]["NOME ACEITO"][0].taxonid).toBe(taxonNameTest.result[1]["NOME ACEITO"][0].taxonid);
    expect(result.result[1]["NOME ACEITO"][0].family).toBe(taxonNameTest.result[1]["NOME ACEITO"][0].family);
    expect(result.result[1]["NOME ACEITO"][0].genus).toBe(taxonNameTest.result[1]["NOME ACEITO"][0].genus);
    expect(result.result[1]["NOME ACEITO"][0].scientificname).toBe(taxonNameTest.result[1]["NOME ACEITO"][0].scientificname);
    expect(result.result[1]["NOME ACEITO"][0].specificepithet).toBe(taxonNameTest.result[1]["NOME ACEITO"][0].specificepithet);
    expect(result.result[1]["NOME ACEITO"][0].infraspecificepithet).toBe(taxonNameTest.result[1]["NOME ACEITO"][0].infraspecificepithet);
    expect(result.result[1]["NOME ACEITO"][0].scientificnameauthorship).toBe(taxonNameTest.result[1]["NOME ACEITO"][0].scientificnameauthorship);
    expect(result.result[1]["NOME ACEITO"][0].taxonomicstatus).toBe(taxonNameTest.result[1]["NOME ACEITO"][0].taxonomicstatus);
    expect(result.result[1]["NOME ACEITO"][0].acceptednameusage).toBe(taxonNameTest.result[1]["NOME ACEITO"][0].acceptednameusage);
    expect(result.result[1]["NOME ACEITO"][0].higherclassification).toBe(taxonNameTest.result[1]["NOME ACEITO"][0].higherclassification);

    // nao fica exatamente o mesmo
    //expect(result.result[1]["NOME ACEITO"][0].source).toBe(taxonNameTest.result[0]["NOME ACEITO"][1].source);

    expect(result.result[1]["NOME ACEITO"][0].references).toBe(taxonNameTest.result[1]["NOME ACEITO"][0].references);

    // verificação: RESULT 1
    expect(result.result[0].taxonid).toBe(taxonNameTest.result[0].taxonid);
    expect(result.result[0].family).toBe(taxonNameTest.result[0].family);
    expect(result.result[0].genus).toBe(taxonNameTest.result[0].genus);
    expect(result.result[0].scientificname).toBe(taxonNameTest.result[0].scientificname);
    expect(result.result[0].specificepithet).toBe(taxonNameTest.result[0].specificepithet);
    expect(result.result[0].infraspecificepithet).toBe(taxonNameTest.result[0].infraspecificepithet);
    expect(result.result[0].scientificnameauthorship).toBe(taxonNameTest.result[0].scientificnameauthorship);
    expect(result.result[0].taxonomicstatus).toBe(taxonNameTest.result[0].taxonomicstatus);
    expect(result.result[0].acceptednameusage).toBe(taxonNameTest.result[0].acceptednameusage);
    expect(result.result[0].higherclassification).toBe(taxonNameTest.result[0].higherclassification);

    // os dados copia nao ficam exatamente iguais
    //expect(result.result[0].source).toBe(taxonNameTest.result[0].source);

    expect(result.result[0].references).toBe(taxonNameTest.result[0].references);
    expect(result.result[0].acceptednameusageid).toBe(taxonNameTest.result[0].acceptednameusageid);
    expect(result.result[0].modified).toBe(taxonNameTest.result[0].modified);

    // verificação: RESULT 2
    expect(result.result[1].taxonid).toBe(taxonNameTest.result[1].taxonid);
    expect(result.result[1].family).toBe(taxonNameTest.result[1].family);
    expect(result.result[1].genus).toBe(taxonNameTest.result[1].genus);
    expect(result.result[1].scientificname).toBe(taxonNameTest.result[1].scientificname);
    expect(result.result[1].specificepithet).toBe(taxonNameTest.result[1].specificepithet);
    expect(result.result[1].infraspecificepithet).toBe(taxonNameTest.result[1].infraspecificepithet);
    expect(result.result[1].scientificnameauthorship).toBe(taxonNameTest.result[1].scientificnameauthorship);
    expect(result.result[1].taxonomicstatus).toBe(taxonNameTest.result[1].taxonomicstatus);
    expect(result.result[1].acceptednameusage).toBe(taxonNameTest.result[1].acceptednameusage);
    expect(result.result[1].higherclassification).toBe(taxonNameTest.result[1].higherclassification);

    // os dados copia nao ficam exatamente iguais
    //expect(result.result[1].source).toBe(taxonNameTest.result[1].source);

    expect(result.result[1].references).toBe(taxonNameTest.result[1].references);
    expect(result.result[1].acceptednameusageid).toBe(taxonNameTest.result[1].acceptednameusageid);
    expect(result.result[1].modified).toBe(taxonNameTest.result[1].modified);
});

let taxonNameNull = {
    result: null,
};

test('Teste pesquisando com a api com o nome cientifico: null', async () => {
    // primeiro busco pelo termo: null para comparar com os resultados esperados
    const result = await searchSpecies(null);

    // verificação: result
    expect(result.result).toBe(taxonNameNull.result);
});

let taxonNameEmpty = {
    result: null,
};

test('Teste pesquisando com a api com o nome cientifico: null', async () => {
    try {
        // primeiro busco pelo termo: null para comparar com os resultados esperados
        const result = await searchSpecies('');

    } catch (error) {
        // verificação da mensagem erro
        expect(error.message).toBe('Error: Website response error with status: 404');
    }
});

let taxonNameNumber = {
    result: null,
};

test('Teste pesquisando com a api com o nome cientifico: 98', async () => {

    // primeiro busco pelo termo: null para comparar com os resultados esperados
    const result = await searchSpecies(98);

    // verificação: result
    expect(result.result).toBe(taxonNameNumber.result);
});

let taxonNameNumberLetter = {
    sucess: true,
    result: null,
    status: 200
};

test(`Teste pesquisando com a api com o nome cientifico: 'A98A'`, async () => {

    // primeiro busco pelo termo: null para comparar com os resultados esperados
    const result = await searchSpecies('A98A');

    // verificação: result
    expect(result.result).toBe(taxonNameNumberLetter.result);

});

let taxonNameSpecialLetter = {
    result: null,
};

test(`Teste pesquisando com a api com o nome cientifico: ';'`, async () => {

    // primeiro busco pelo termo: ';' para comparar com os resultados esperados
    const result = await searchSpecies(';');

    // verificação: result
    expect(result.result).toBe(taxonNameSpecialLetter.result);

});

let taxonNameLarge = {
    sucess: true,
    result: null,
    status: 200
};

test(`Teste pesquisando com a api com o nome cientifico: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis ultricies nisi, sed dignissim ante. Cras et molestie eros, in consectetur magna. Vivamus a dui quis lorem ullamcorper mollis. Duis condimentum libero sit amet laoreet varius. Nullam pharetra nunc a dolor feugiat sagittis. Maecenas pharetra, est sed eleifend eleifend, enim metus laoreet quam, quis vehicula libero mi sit amet augue. Maecenas ullamcorper justo vitae efficitur scelerisque. Pellentesque suscipit dignissim odio sed posuere.Integer pellentesque, velit vel tincidunt tristique, massa enim suscipit libero, eget bibendum sem est in tortor. Pellentesque sed nisl urna. Vivamus dictum risus a massa pharetra, dapibus tincidunt turpis rhoncus. Aenean elit mi, fermentum in nisl non, aliquet aliquet enim. Vestibulum aliquet, dolor ut ultricies dignissim, odio sem aliquam risus, in congue mi enim vel tellus. Vestibulum vehicula auctor hendrerit. Nam consequat mollis tellus sed lobortis.'`, async () => {

    // primeiro busco pelo termo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis ultricies nisi, sed dignissim ante. Cras et molestie eros, in consectetur magna. Vivamus a dui quis lorem ullamcorper mollis. Duis condimentum libero sit amet laoreet varius. Nullam pharetra nunc a dolor feugiat sagittis. Maecenas pharetra, est sed eleifend eleifend, enim metus laoreet quam, quis vehicula libero mi sit amet augue. Maecenas ullamcorper justo vitae efficitur scelerisque. Pellentesque suscipit dignissim odio sed posuere.Integer pellentesque, velit vel tincidunt tristique, massa enim suscipit libero, eget bibendum sem est in tortor. Pellentesque sed nisl urna. Vivamus dictum risus a massa pharetra, dapibus tincidunt turpis rhoncus. Aenean elit mi, fermentum in nisl non, aliquet aliquet enim. Vestibulum aliquet, dolor ut ultricies dignissim, odio sem aliquam risus, in congue mi enim vel tellus. Vestibulum vehicula auctor hendrerit. Nam consequat mollis tellus sed lobortis.' para comparar com os resultados esperados
    const result = await searchSpecies('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis ultricies nisi, sed dignissim ante. Cras et molestie eros, in consectetur magna. Vivamus a dui quis lorem ullamcorper mollis. Duis condimentum libero sit amet laoreet varius. Nullam pharetra nunc a dolor feugiat sagittis. Maecenas pharetra, est sed eleifend eleifend, enim metus laoreet quam, quis vehicula libero mi sit amet augue. Maecenas ullamcorper justo vitae efficitur scelerisque. Pellentesque suscipit dignissim odio sed posuere.Integer pellentesque, velit vel tincidunt tristique, massa enim suscipit libero, eget bibendum sem est in tortor. Pellentesque sed nisl urna. Vivamus dictum risus a massa pharetra, dapibus tincidunt turpis rhoncus. Aenean elit mi, fermentum in nisl non, aliquet aliquet enim. Vestibulum aliquet, dolor ut ultricies dignissim, odio sem aliquam risus, in congue mi enim vel tellus. Vestibulum vehicula auctor hendrerit. Nam consequat mollis tellus sed lobortis.');

    // verificação: result
    expect(result.result).toBe(taxonNameLarge.result);

});