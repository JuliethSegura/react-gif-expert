import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
    
        <form className='col-md-9 ms-sm-auto col-lg-10 px-md-5  mt-3' onSubmit={onSubmit}>

            <div class="d-flex align-items-center">
                <form class="w-50 me-3">
                    <input type="text" class="form-control" placeholder="Buscar" aria-label="Buscar" value={inputValue}
                        onChange={onInputChange}
                    />
                </form>
                <div class="col-md-3 text-start">
                    <button class="btn btn-primary" >Buscar</button>
                </div>
            </div>      
        </form>
    )
}


