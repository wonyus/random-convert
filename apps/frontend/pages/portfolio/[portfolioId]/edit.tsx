import { NextPage } from 'next'
import { useRouter } from 'next/router'

const EditPortfolio: NextPage = () => {
	const router = useRouter()
	const profolioId = router.query.portfolioId
	return <h1>"""""""""""edit {profolioId}</h1>
}

export default EditPortfolio
