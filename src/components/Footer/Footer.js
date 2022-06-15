import React from 'react'
import './footer.css'

const Footer =()=>{
    return(
        <footer className="footer clearfix">
		<div>
			<div className="row">
				<div className="col-xs-6 footer-para">
					<p>&copy; All right reserved</p>
				</div>
				<div className="col-xs-6 text-right">
					<a href="https://www.flaticon.com/premium-icon/facebook_3670032?term=facebook&related_id=3670032"><i class="fi fi-facebook"></i></a>
					<a href=""><i class="fa fa-twitter"></i></a>
					<a href=""><i class="fa fa-skype"></i></a>
				</div>
			</div>
		</div>
	</footer>
    )
}

export default Footer