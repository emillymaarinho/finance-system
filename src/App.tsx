import React from "react";

import { useState, useEffect } from "react";
import { Body, Container, Header, HeaderText } from "./App.styles";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { categories } from "./data/categories";
import { getCurrentMonth, filterListByMonth } from "./helpers/DateFilter";
import TableArea from "./components/tableArea";
import InfoArea from "./components/InfoArea";
import InputArea from "./components/InputArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let currentIncome = 0;
    let currentExpense = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        currentExpense += filteredList[i].value;
      } else {
        currentIncome += filteredList[i].value;
      }
    };
    setIncome(currentIncome);
    setExpense(currentExpense);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <Container>

      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>

      <Body>

        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList} />

      </Body>
    </Container>
  );
};

export default App;
