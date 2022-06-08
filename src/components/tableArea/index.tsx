import React from 'react';
import { Table, TableHeadColumn } from "./styles";
import { Item } from '../../types/Item';
import TableItem from '../TableItem';

type Props = {
    list: Item[];
};

const TableArea = ({ list }: Props) => {
    return (
        <Table>
            <thead>
                <tr>
                    <TableHeadColumn width={120}> Data </TableHeadColumn>
                    <TableHeadColumn width={150}> Categoria </TableHeadColumn>
                    <TableHeadColumn> Titulo </TableHeadColumn>
                    <TableHeadColumn width={180}> Valor </TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item} />
                ))}
            </tbody>
        </Table>
    );
};

export default TableArea;