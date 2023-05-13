import React, { useEffect, useState } from 'react';
import { ConsultancyItem } from './ConsultancyItem';

export const ConsultanciesTable = ({ title, header, items, className }) => {
	const [cols, setCols] = useState(0); 
	const [dataLoaded, setDataLoaded] = useState(false);

	useEffect(() => {
		setCols(header.length);
		setDataLoaded(true);
	}, [header]);

	return (
		<>
			<div className={`flex flex-col border border-black rounded-xl ${className}`}>
				<div className='bg-red-600 text-white border-b border-black rounded-t-xl text-center text-xl'>
					{title}
				</div>
				<div className='box'>
					{dataLoaded && (
						<div className={`grid grid-cols-${cols} bg-slate-400 divide-x divide-slate-800`}>
							{header.map((item, key) => (
								<h1
									key={key}
									className='text-center font-bold'>
									{item.label}
								</h1>
							))}
						</div>
					)}
					{dataLoaded &&
						items.map((item, key) => (
							<ConsultancyItem
								key={key}
								header={header}
								cols={cols}
								item={item}
								className={`${key % 2 !== 0 ? 'bg-gray-200' : ''} ${key == items.length - 1 ? 'rounded-b-xl' : false}`}						
							/>
						))}
				</div>
			</div>
		</>
	);
};
