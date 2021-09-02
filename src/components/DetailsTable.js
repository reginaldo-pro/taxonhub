import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    padding: 2,
  },
});

function createData(nomePesquisado, nomeEncontrado, nomeAceito, statusTaxonomico, familiaSinonimos, formaVida, substrato, grupoTaxonomico, origem, endemismo, distribuicao, possivelDistribuicao, dominioFitogeografico, vegetacao) {
  return {
    nomePesquisado, nomeEncontrado, nomeAceito, statusTaxonomico, familiaSinonimos, formaVida, substrato, grupoTaxonomico, origem, endemismo, distribuicao, possivelDistribuicao, dominioFitogeografico, vegetacao,
  };
}

const rows = [
  createData('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome Pesquisado</TableCell>
            <TableCell align="right">Nome Encontrado</TableCell>
            <TableCell align="right">Nome Aceito</TableCell>
            <TableCell align="right">Status Taxonômico</TableCell>
            <TableCell align="right">Família e Sinônimos</TableCell>
            <TableCell align="right">Forma de Vida</TableCell>
            <TableCell align="right">Substrato</TableCell>
            <TableCell align="right">Grupo Taxonômico</TableCell>
            <TableCell align="right">Origem</TableCell>
            <TableCell align="right">Endemismo</TableCell>
            <TableCell align="right">Distribuição</TableCell>
            <TableCell align="right">Possível Distribuição</TableCell>
            <TableCell align="right">Domínio Fitogeográfico</TableCell>
            <TableCell align="right">Vegetação</TableCell>
            <TableCell>
              Sinonimos
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.nomePesquisado}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.nomeEncontrado}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.nomeAceito}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.statusTaxonomico}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.familiaSinonimos}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.formaVida}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.substrato}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.grupoTaxonomico}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.origem}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.endemismo}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.distribuicao}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.possivelDistribuicao}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.dominioFitogeografico}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.vegetacao}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
