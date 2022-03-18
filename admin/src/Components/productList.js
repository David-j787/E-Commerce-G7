import React from "react";
import { 
    List, 
    Datagrid, 
    TextField, 
    DateField,
    EditButton,
    DeleteButton,
    Create 
} from 'react-admin';

export function productList(props){
    return(
        <List {...props}>
            <Datagrid>
                <TextField source="id"></TextField>
                <TextField source="name"></TextField>
                <TextField source="price"></TextField>
                <TextField source="description"></TextField>
                <TextField source="images"></TextField>
                <TextField source="stock"></TextField>
                <TextField source="rating"></TextField>
                <EditButton basePath="products"></EditButton>
                <DeleteButton basePath="products"></DeleteButton>
            </Datagrid>
        </List>
    )
}

export function productCreate(props){
    return(
        <Create>

        </Create>
    )
}