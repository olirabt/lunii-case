import { useEffect, useState } from 'react';
import cn from 'classnames';

interface FormAlertProps {
	type: 'success' | 'warning';
}

const FormAlert: React.FC<FormAlertProps> = ({ type }) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (type) {
			setShow(true);
		}
	}, [type]);

	const alertClass = cn({
		'bg-validate500 text-validate400': type === 'success',
		'bg-alert400 text-alert500': type === 'warning',
	});

	return (
		<div className={cn('text-left w-full px-5 py-3 mx-auto rounded-md', alertClass)}>
			{type === 'success' && <p>Voici le lien raccourci : https//localhost:3000/4hxNeK</p>}
			{type === 'warning' && <p>L’url saisie est invalide.</p>}
		</div>
	);
};

export default FormAlert;