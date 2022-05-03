import React, { useEffect, useState } from "react";

// Screens
import ScreensLayout from '../Layout/Layout';
import blogApi from "../../api/Blog";
import { useParams } from "react-router-dom";
import { formatDate } from "../../helper/helper";

export default function BlogDetail(){
    const params = useParams();
    const [data, setData] = useState(null);

    useEffect(()=> {
        blogApi.getDetail(params.slug)
        .then(response => {
            if (response.result === 1) {
                setData(response.data);
            }
        })
    }, []);
    return(
        <ScreensLayout>
            {data ?
                <div className="container blog-detail">
                    <div className="blog-title">{data.title}</div>
                    <div className="blog-sub-info">
                        <div className="author">Bởi {data.user_id} - </div>
                        <div className="modify">{formatDate(data.updated_at)}</div>
                        <div className="view"><i class="fa fa-eye" aria-hidden="true"></i> {data.view}</div>
                    </div>
                    <div className="blog-avatar">
                        <img src={data.image} alt={data.title} />
                    </div>
                    <div className="blog-content">
                        <div dangerouslySetInnerHTML={{
                            __html: data.content
                            }}>
                        </div>
                    </div>
                </div>
            :
                <div className="text-center text-danger fst-italic">Không tìm thấy bài viết!</div>
            }
        </ScreensLayout>
    );
}
