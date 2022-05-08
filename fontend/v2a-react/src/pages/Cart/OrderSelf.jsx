import React, { useEffect, useState } from "react";
import ScreensLayout from "../Layout/Layout";
import orderApi from "../../api/Order";
import { options } from "../../helper/helper";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import ERROR_MESSAGE from "../../constants/errors";
import { getLocalStorage } from "../../helper/storage";
import storage from "../../constants/storage";
import linkName from "../../constants/linkName";
import { useNavigate } from "react-router-dom";

const OrderSelf = () => {
    const auth = getLocalStorage(storage.AUTH);
    const navigate = useNavigate();
    const [orderSelf, setOrderSelf] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        if (auth) {
            orderApi.selfOrder({token: auth.token})
            .then(response => {
                if (response.result === 1) {
                    setOrderSelf(response.data?.listOrder);
                    return;
                }
                toast.error(ERROR_MESSAGE, options);
            })
            .catch(error => {
                toast.error(ERROR_MESSAGE, options);
            })
        } else {
            navigate(linkName.HOME.INDEX);
        }
        setIsUpdate(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUpdate]);

    const handleStatus = (status) => {
        let rs = "";
        switch (parseInt(status)) {
            case 0:
                rs = "Chờ xử lý";
                break;
            case 1:
                rs = "Đang giao";
                break;
            case 2:
                rs = "Đã giao";
                break;
        
            default:
                rs = "Đã huỷ";
                break;
        }
        return rs;
    }
    const rmOrder = (id) => {
        orderApi.cancelOrder({order_id: id, token: auth.token})
        .then(response => {
            if (response.result === 1) {
                setIsUpdate(true);
                return;
            }
            toast.error(ERROR_MESSAGE, options);
        })
        .catch(error => {
            toast.error(ERROR_MESSAGE, options);
        })
    }
    return (
        <>
            <ScreensLayout>
                <div className="container order-check order-self">
                    <div className="row">
                        <h3 className="text-center">Danh sách đơn hàng</h3>
                    </div>
                    <div className="my-3">
                        {orderSelf?.length > 0 ?
                            orderSelf.map(item => {
                                return <div key={item.id}>
                                    <div className="order-check-content px-4">
                                        {item.status !== -1 && item.payment !== 2 && <button className="btn btn-danger text-end btn-rm-order" onClick={() => rmOrder(item.id)}>Huỷ đơn hàng</button> }
                                        <Row className="py-2">
                                            <Col>Mã đơn hàng: {item.id}</Col>
                                            <Col>Trạng thái: {handleStatus(item.status)}</Col>
                                        </Row>
                                        <Row className="py-2">
                                            <Col>Tên người nhận: {item.full_name}</Col>
                                            <Col>Địa chỉ nhận: {item.address}</Col>
                                        </Row>
                                        <Row className="py-2">
                                            <Col>Ngày đặt hàng: {item.created_at}</Col>
                                            <Col>Phương thức thanh toán: {parseInt(item.payment) === 0 ? "Thanh toán khi nhận hàng(COD)" : "Thanh toán online"}</Col>
                                        </Row>
                                    </div>
                                    <hr />
                                </div>
                            })
                        :
                        <div className="text-center fst-italic text-danger">Danh sách đơn hàng trống!</div>
                        }
                    </div>
                </div>
            </ScreensLayout>
        </>
    );
};

export default OrderSelf;