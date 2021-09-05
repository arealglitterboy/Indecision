import React from 'react';
import swal from '@sweetalert/with-react';

export default (selectedOption) => (
    swal({
        className: "option-popup",
        content: (
            <section className="option-popup__content">
                <h2 className="option-popup__content__header">How about this?</h2>
                <p className="option-popup__content__body">{selectedOption}</p>
            </section>
        ),
        button: { text: "Close", className: "option-popup__button" }
    })
);