import React from 'react';

function NotFoundPage({staticContext={}}){
    staticContext.notFound=true
        return (
            <div>
                <h1 className='txt'>
                صفحه ای که در جستجوی آن می باشید وجود ندارد.
                </h1>
            </div>
        );

}

export default {
    component:NotFoundPage
}