import React, { Component } from 'react';

// Columns: array 
// sortColumn: obj
// onSort: func
class TableHeader extends Component {

    raiseSort = path => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn)
    }


    render() {
        return (
            <thead>
                <tr>
                    {this.props.columns.map(column =>
                        <th
                            onClick={() => this.raiseSort(column.path)}
                            key={column.path || column.key}
                            style={{cursor:"pointer"}}
                        >
                            {column.label}
                        </th>
                    )}
                </tr>
            </thead>

        );
    }
}

export default TableHeader;