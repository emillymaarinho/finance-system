import React from "react";
import { Category, TableColumn, TableLine, Value } from './styles';
import { Item } from "../../types/Item";
import { formatDate } from '../../helpers/DateFilter';
import { categories } from '../../data/categories';

type Props = {
    item: Item;
}

const TableItem = ({ item }: Props) => {

    return (
        <TableLine>
            <TableColumn>{formatDate(item.date)}</TableColumn>
            <TableColumn>
                <Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </Category>
            </TableColumn>

            <TableColumn>{item.title}</TableColumn>

            <TableColumn>
                <Value color={categories[item.category].expense ? '#7C3E66' : '#243A73'}>
                    R$ {item.value.toFixed(2)}
                </Value>
            </TableColumn>
        </TableLine>
    );
};

export default TableItem;