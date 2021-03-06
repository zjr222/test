import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import RatingComp from '../../RatingComp'

export default function PopularFilmComp({ people, contents, question, img, movieName, rate, id }) {
    return (
        <div className={styles.review}>
            <div className={styles.reviewHd}>
                <Link to={{
                    pathname: `/details/${id}`,
                    state: `${rate}`
                }}>
                    <img src={img} alt={movieName} />
                </Link>
            </div>
            <div className={styles.reviewBd}>
                <h3>
                    {question}
                </h3>
                <div className={styles.reviewMeta}>
                    <span>{people}</span>
                    {"评论"}
                    <Link className={styles.movie} to={{
                        pathname: `/details/${id}`,
                        state: `${rate}`
                    }}>
                        {movieName}
                    </Link>
                    {rate !== 0 ? <RatingComp score={rate} /> : ""}
                </div>
                <div className={styles.reviewContent}>
                    {contents}
                </div>
            </div>
        </div>
    )
}