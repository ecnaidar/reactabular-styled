import React from 'react';
import styled from 'styled-components'
import * as Table from 'reactabular-table';

const TableWithBorders = styled.table `
    border: 1px solid black;
    margin: 0 auto;
    `

const BlackCell = styled.td `
    background-color: black;
    color: white;
    `

const WhiteCell = styled.td `
    background-color: white;
    color: black;
    `

export const DeclarativeStyled = ({columns, rows}) => {

 // 1. Override any component with the styled one
 const components = {
  table: TableWithBorders,
  header: {
   wrapper: 'thead',
   row: 'tr',
   cell: 'th'
  },
  body: {
   wrapper: 'tbody',
   row: 'tr',
   cell: BlackCell
  }
 }

 //2. Pass the components object to Provider
 return ( 
 	<Table.Provider components={components} columns= {columns}>
		< Table.Header / >

		<Table.Body rows={rows}rowKey = "id" / >
   	</Table.Provider>
  )
  // 3. Profit
}

export const FormatterStyled = ({columns,rows}) => {
 // Style individual cells using formatters, only applicable to cells
 // Same can be done to header cells, see https://reactabular.js.org/#/column-definition/formatters
 // 1. Define formatter 
const formatter = (value, {columnIndex,rowIndex}) => {
  return (columnIndex + rowIndex) % 2 === 0 ? < WhiteCell children = {[value]}/> : <BlackCell children={[value]} / >
 }

// 2. Add formatters to columns definition
const columnsWithFormatters = columns.map(column => {
	const columnWithFormatter = {
  		...column,
		cell: {
	    	formatters: [formatter]
	   	}
 	}
  return columnWithFormatter
})

// 3. Pass columns with formatters to provider as usual
return ( 
	<Table.Provider columns={columnsWithFormatters} style = {{margin: "0 auto"}} >
		<Table.Header / >
		<Table.Body rows = {rows} rowKey = "id" / >
	</Table.Provider>
	)
}