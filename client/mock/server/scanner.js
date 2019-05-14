/**
 * Created by Andy on 2017/12/1.
 */
var data1 = {
    "from": "xml",
    "key": "component_name",
    "level": "1.2",
    "parents": [],
    "itemcount": 8,
    "items": [{
        "name": "CPU",
        "index": 0,
        "N": {"nodeaddress": "0000.0000.0003.0001", "dbfilename": "0", "publicfilename": "PUB.txt"}
    }, {
        "name": "����",
        "index": 1,
        "N": {"nodeaddress": "0000.0000.0003.0002", "dbfilename": "0", "publicfilename": "PUB.txt"}
    }, {
        "name": "�ڴ�",
        "index": 2,
        "N": {"nodeaddress": "0000.0000.0003.0003", "dbfilename": "0", "publicfilename": "PUB.txt"}
    }, {
        "name": "����",
        "index": 3,
        "N": {"nodeaddress": "0000.0000.0003.0004", "dbfilename": "0", "publicfilename": "PUB.txt"}
    }, {
        "name": "Ӳ��",
        "index": 4,
        "N": {"nodeaddress": "0000.0000.0003.0005", "dbfilename": "0", "publicfilename": "PUB.txt"}
    }, {
        "name": "�Կ�",
        "index": 5,
        "N": {"nodeaddress": "0000.0000.0003.0006", "dbfilename": "0", "publicfilename": "PUB.txt"}
    }, {
        "name": "����",
        "index": 6,
        "N": {"nodeaddress": "0000.0000.0003.0007", "dbfilename": "0", "publicfilename": "PUB.txt"}
    }, {
        "name": "����",
        "index": 7,
        "N": {"nodeaddress": "0000.0000.0003.0008", "dbfilename": "0", "publicfilename": "PUB.txt"}
    }]
};

var data2 = {
    "from": "xml",
    "key": "err_descriptor",
    "level": "1.2",
    "parents": [],
    "itemcount": 8,
    "items": [{
        "name": "CPU",
        "index": 0,
        "N": {"nodeaddress": "0000.0000.0003.0001", "dbfilename": "0", "publicfilename": "PUB.txt"},
        "content": {
            "err": true,
            "text": [{
                "index": 0,
                "code": "0x001",
                "descriptor": "�¶ȹ���"
            }, {
                "index": 1,
                "code": "0x002",
                "descriptor": "fan error ������ͣת��"
            }, {
                "index": 2,
                "code": "0x003",
                "descriptor": "��Ƶ���ͣ�������ŽӴ�������"
            }]
        }
    }, {
        "name": "����",
        "index": 1,
        "N": {"nodeaddress": "0000.0000.0003.0002", "dbfilename": "0", "publicfilename": "PUB.txt"},
        "content": {
            "err": true,
            "text": [{
                "index": 0,
                "code": "0x001",
                "descriptor": "���ݹİ�"
            }, {
                "index": 1,
                "code": "0x002",
                "descriptor": "����оƬ�ջ�"
            }, {
                "index": 2,
                "code": "0x003",
                "descriptor": "���ŵ�ѹ����"
            }]
        }
    }, {
        "name": "�ڴ�",
        "index": 2,
        "N": {"nodeaddress": "0000.0000.0003.0003", "dbfilename": "0", "publicfilename": "PUB.txt"},
        "content": {
            "err": true,
            "text": [{
                "index": 0,
                "code": "0x001",
                "descriptor": "��Ƶ������"
            }, {
                "index": 1,
                "code": "0x002",
                "descriptor": "�洢��Ԫ����δ֪����"
            }, {
                "index": 2,
                "code": "0x003",
                "descriptor": "��ⲻ���ڴ�"
            }]
        }
    }, {
        "name": "����",
        "index": 3,
        "N": {"nodeaddress": "0000.0000.0003.0004", "dbfilename": "0", "publicfilename": "PUB.txt"},
        "content": {
            "err": true,
            "text": [{
                "index": 0,
                "code": "0x001",
                "descriptor": "��ѹ����"
            }, {
                "index": 1,
                "code": "0x002",
                "descriptor": "��ⲻ������"
            }, {
                "index": 2,
                "code": "0x003",
                "descriptor": "�¶ȹ���"
            }]
        }
    }, {
        "name": "Ӳ��",
        "index": 4,
        "N": {"nodeaddress": "0000.0000.0003.0005", "dbfilename": "0", "publicfilename": "PUB.txt"},
        "content": {
            "err": true,
            "text": [{
                "index": 0,
                "code": "0x001",
                "descriptor": "��ͷת���쳣"
            }, {
                "index": 1,
                "code": "0x002",
                "descriptor": "���̻���"
            }, {
                "index": 2,
                "code": "0x003",
                "descriptor": "���粻��"
            }]
        }
    }, {
        "name": "�Կ�",
        "index": 5,
        "N": {"nodeaddress": "0000.0000.0003.0006", "dbfilename": "0", "publicfilename": "PUB.txt"},
        "content": {
            "err": true,
            "text": [{
                "index": 0,
                "code": "0x001",
                "descriptor": "�ް汾�ͺ�"
            }, {
                "index": 1,
                "code": "0x002",
                "descriptor": "fan error (�����쳣)"
            }, {
                "index": 2,
                "code": "0x003",
                "descriptor": "�Դ治��"
            }]
        }
    }, {
        "name": "����",
        "index": 6,
        "N": {"nodeaddress": "0000.0000.0003.0007", "dbfilename": "0", "publicfilename": "PUB.txt"},
        "content": {
            "err": true,
            "text": [{
                "index": 0,
                "code": "0x001",
                "descriptor": "��DirectX�汾������"
            }, {
                "index": 1,
                "code": "0x002",
                "descriptor": "�����������������������ź�"
            }, {
                "index": 2,
                "code": "0x003",
                "descriptor": "��������ͨ·�쳣"
            }]
        }
    }, {
        "name": "����",
        "index": 7,
        "N": {"nodeaddress": "0000.0000.0003.0008", "dbfilename": "0", "publicfilename": "PUB.txt"},
        "content": {
            "err": true,
            "text": [{
                "index": 0,
                "code": "0x001",
                "descriptor": "���ź�"
            }, {
                "index": 1,
                "code": "0x002",
                "descriptor": "DNS���������ֽ�������"
            }, {
                "index": 2,
                "code": "0x003",
                "descriptor": "�ź�����������Ӧ"
            }]
        }
    }]
};