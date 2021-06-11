import React, { FC } from "react";
import MUIDataTable from "mui-datatables";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { COLUMNS } from "./columns";
import "./Table.scss";

export interface TableProps {
  data: IQuestionnaire[] | undefined;
  handleRedirection: (id?: number) => void;
  handleDelete: (id: number) => void;
}

const Table: FC<TableProps> = ({ data, handleRedirection, handleDelete }) => {
  const customColumns = () => {
    const customs = [
      {
        name: "id",
        label: " ",
        options: {
          empty: true,
          customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
            <div className="table__icons">
              <EditIcon
                color="primary"
                onClick={() => handleRedirection(tableMeta.rowData[4])}
                className="table__icon"
              />
              <DeleteIcon
                color="secondary"
                onClick={() => handleDelete(tableMeta.rowData[4])}
                className="table__icon"
              />
            </div>
          ),
          onclick: (e: any) => console.log(e),
        },
      },
    ];
    return customs;
  };
  return (
    <>
      {data && data.length ? (
        <MUIDataTable
          title={"Lista de Cuestionarios"}
          data={data}
          columns={[...COLUMNS, ...customColumns()]}
          options={{
            responsive: "standard",
            fixedHeader: false,
            filterType: "textField",
            selectableRows: "none",
            elevation: 0,
            print: false,
          }}
        />
      ) : (
        <p className="table__no-data">No se encontraron datos</p>
      )}
    </>
  );
};

export default Table;
