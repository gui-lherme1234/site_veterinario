-- CreateTable
CREATE TABLE `usuário` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `sobrenome` VARCHAR(50) NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `rg` VARCHAR(9) NOT NULL,
    `data_rg` DATE NOT NULL,
    `email` VARCHAR(20) NOT NULL,
    `senha` VARCHAR(50) NOT NULL,
    `telefone` VARCHAR(11) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
