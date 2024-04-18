let produtos = [];

function busca_binaria_op(id,p,op){
    
    meio = parseInt(p.length / 2)
    while (meio > 0 && meio <= p.length){
        if (id == p.id[meio]){
            //valor = vetor[meio]
            if (op == 'Deletar'){
                produtos = produtos.pop(id)
            }else if(op == 'Alterar'){
                console.log(";=;")
            }
            
            meio = 20000
        }else if (id < p.id[meio]){
            meio = parseInt(meio / 2)
        }else if (id > p.id[meio]){
            meio = parseInt((parseInt(p.length) - meio) / 2)  + meio
        }

        if (meio > 0 || meio <= p.length){
            result = False
        }
            
    }

    return produtos
}


function cad_produto (id,nome, qtd){
    produto = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    produtos.push(produto)
    return produtos
}

function list_produto(){
    return produtos
}

function del_produto(id){
    
    if (produtos.length == 0 || produtos == null){
        return 'Lista Vazia'
    }else if(produtos.length == 1 && produtos[0].id == ""+id){
        delete produtos[0]
    }else{
        produtos = busca_binaria_op(id,produtos,'Deletar')
    }
    return produtos
}

function edit_produto(id, qtd){

}

module.exports={
    cad_produto,
    list_produto,
    del_produto
}


