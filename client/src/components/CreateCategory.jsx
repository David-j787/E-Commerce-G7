import React, { useState } from "react";

export function CreateCategory(){

    const category = useState('')

    return(
        <div>
            <form>
                <label>Category name:</label>
                <input type="text"/>
            </form>
        </div>
    )
}

export default CreateCategory;