import { useState } from 'react'
import paginationStyle from './pagination.module.css'

const Pagination = ({pageCount, currentPage, onPageChange, paginationNum = 10}) => {
	let pages = []

	for (let i = 1; i <= pageCount; i++) {
		pages.push(i)
		
	}

	const totalPartsPages = Math.ceil(pageCount / paginationNum)
	const [partNum, setPartNum] = useState(1)
	const leftLimitValue = ((partNum - 1) * paginationNum + 1)
	const rightLimitValue = (partNum * paginationNum)

	

	
	
	return (
		<ul className={paginationStyle.pagination}>
				{ partNum > 1 && <button onClick={() => {
					setPartNum(partNum - 1)
				}} className={paginationStyle.previous}>prev</button>}
				{pages
				.filter(p => p >= leftLimitValue && p <= rightLimitValue)
				.map(p => {
				 return	<li className={`${paginationStyle.paginationEl} ${currentPage === p && paginationStyle.selected}`} 
								 onClick={(e) => {onPageChange(p) }}>{p}
							</li>
				})}
				{ totalPartsPages > partNum && <button onClick={() => {
					setPartNum(partNum + 1)
				}} className={paginationStyle.next}>next</button>}
			</ul>
	)
}

export default Pagination