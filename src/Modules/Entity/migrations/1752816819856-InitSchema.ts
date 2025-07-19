import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1752816819856 implements MigrationInterface {
    name = 'InitSchema1752816819856'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Units\` (\`UnitId\` int NOT NULL AUTO_INCREMENT, \`Name\` varchar(255) NOT NULL, \`CreateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`UnitId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`CategoryOnes\` (\`CategoryOneId\` int NOT NULL AUTO_INCREMENT, \`CategoryName\` varchar(255) NOT NULL, \`CatCode\` varchar(255) NULL, \`CreateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`MinQty\` decimal(18,2) NOT NULL, \`MaxQty\` decimal(18,2) NOT NULL, PRIMARY KEY (\`CategoryOneId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`CategoryTwoes\` (\`CategoryTwoId\` int NOT NULL AUTO_INCREMENT, \`CategoryOneId\` int NULL, \`CategoryName\` varchar(255) NOT NULL, \`CatCode\` varchar(255) NULL, \`CreateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`CategoryTwoId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`CategoryThrees\` (\`CategoryThreeId\` int NOT NULL AUTO_INCREMENT, \`CategoryTwoId\` int NULL, \`CategoryName\` varchar(255) NOT NULL, \`CatCode\` varchar(255) NULL, \`CreateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`CategoryThreeId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Products\` (\`ProductId\` int NOT NULL AUTO_INCREMENT, \`Code\` varchar(255) NULL, \`Barcode\` varchar(255) NULL, \`MinQty\` decimal(18,2) NOT NULL, \`MaxQty\` decimal(18,2) NOT NULL, \`Name\` varchar(100) NOT NULL, \`Ratio\` decimal(18,2) NOT NULL, \`UnitId\` int NULL, \`UnitSecondaryId\` int NULL, \`Description\` varchar(255) NULL, \`Photo\` varchar(255) NULL, \`CategoryOneId\` int NULL, \`CategoryTwoId\` int NULL, \`CategoryThreeId\` int NULL, \`Qty\` decimal(18,2) NOT NULL, \`QtySec\` decimal(18,2) NOT NULL, \`Fee\` decimal(18,2) NOT NULL, \`FeeExit\` decimal(18,2) NOT NULL, \`CreateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`LastModifyDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`IsOutOfDate\` bit NOT NULL, \`MetaKeywords\` varchar(255) NULL, \`EnExpireDate\` datetime NULL, \`BatchNumber\` varchar(255) NULL, \`IsNoRatio\` bit NOT NULL, PRIMARY KEY (\`ProductId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Storages\` (\`StorageId\` int NOT NULL AUTO_INCREMENT, \`Name\` varchar(255) NULL, \`CreateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`StorageId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`TransferYears\` (\`TransferYearId\` int NOT NULL AUTO_INCREMENT, \`NewYear\` varchar(15) NOT NULL, \`IsActive\` bit NOT NULL, \`CreateBy\` varchar(255) NULL, \`CreateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`TransferYearId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Kinds\` (\`KindId\` int NOT NULL AUTO_INCREMENT, \`KindName\` varchar(255) NOT NULL, \`IsUserAdd\` bit NOT NULL, \`CreateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`TypeOperation\` int NOT NULL, \`IsDeleted\` bit NOT NULL, PRIMARY KEY (\`KindId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Drafts\` (\`DraftId\` int NOT NULL AUTO_INCREMENT, \`DraftNo\` int NOT NULL, \`FinalDate\` datetime NOT NULL, \`State\` int NOT NULL, \`CustomerId\` int NULL, \`KindId\` int NOT NULL, \`StorageId\` int NOT NULL, \`TransferYearId\` int NOT NULL, \`Emailed\` bit NOT NULL, \`FinanceState\` int NOT NULL, \`FinanceDate\` datetime NOT NULL, \`Description\` varchar(255) NULL, \`FinanceEmailed\` bit NOT NULL, \`TotalPrice\` decimal(18,2) NOT NULL, \`DiscountPrice\` decimal(18,2) NOT NULL, \`DeliveryPrice\` decimal(18,2) NOT NULL, \`FileForm\` varchar(255) NULL, \`FactorNumber\` varchar(255) NULL, \`CreateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`IsContradiction\` bit NOT NULL, \`Token\` varchar(255) NULL, \`DraftStep\` int NOT NULL, PRIMARY KEY (\`DraftId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Customers\` (\`CustomerId\` int NOT NULL AUTO_INCREMENT, \`StorageId\` int NOT NULL, \`Name\` varchar(255) NOT NULL, \`Email\` varchar(255) NULL, \`Website\` varchar(255) NULL, \`PhoneNumber\` varchar(255) NULL, \`FaxNumber\` varchar(255) NULL, \`MobileNumber\` varchar(255) NULL, \`PostalCode\` varchar(255) NULL, \`Address\` varchar(255) NULL, \`CreateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`Description\` varchar(255) NULL, \`Supplier\` bit NOT NULL, \`Buyer\` bit NOT NULL, \`IsActive\` bit NOT NULL, \`State\` int NOT NULL, PRIMARY KEY (\`CustomerId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`DraftItems\` (\`DraftItemId\` int NOT NULL AUTO_INCREMENT, \`QtyIn\` decimal(18,2) NOT NULL, \`QtyOut\` decimal(18,2) NOT NULL, \`Qty\` decimal(18,2) NOT NULL, \`QtyInSecond\` decimal(18,2) NOT NULL, \`QtyOutSecond\` decimal(18,2) NOT NULL, \`QtySecond\` decimal(18,2) NOT NULL, \`Remaining\` decimal(18,2) NOT NULL, \`RemainingSecond\` decimal(18,2) NOT NULL, \`CreateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`DraftId\` int NOT NULL, \`ProductId\` int NOT NULL, \`FeeEnter\` decimal(18,2) NOT NULL, \`FeeExit\` decimal(18,2) NOT NULL, \`PriceBeforeDiscount\` decimal(18,2) NOT NULL, \`Discount\` decimal(18,2) NOT NULL, \`PriceAfterDiscount\` decimal(18,2) NOT NULL, \`Tax\` decimal(18,2) NOT NULL, \`TotalPrice\` decimal(18,2) NOT NULL, \`TotalPriceOther\` decimal(18,2) NOT NULL, \`FinanceDate\` datetime NOT NULL, \`EnExpireDate\` datetime NULL, \`BatchNumber\` varchar(255) NULL, \`ProductDescription\` varchar(255) NULL, PRIMARY KEY (\`DraftItemId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Inventories\` (\`InventoryId\` int NOT NULL AUTO_INCREMENT, \`StorageId\` int NULL, \`TransferYearId\` int NOT NULL, \`ProductId\` int NOT NULL, \`Qty\` decimal(18,2) NOT NULL, \`QtySecond\` decimal(18,2) NOT NULL, \`FeeEnter\` decimal(18,2) NOT NULL, \`FeeExit\` decimal(18,2) NOT NULL, \`TotalPriceEnter\` decimal(18,2) NOT NULL, \`TotalPriceExit\` decimal(18,2) NOT NULL, PRIMARY KEY (\`InventoryId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`CategoryTwoes\` ADD CONSTRAINT \`FK_10a389995d7e72b84c59049db23\` FOREIGN KEY (\`CategoryOneId\`) REFERENCES \`CategoryOnes\`(\`CategoryOneId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`CategoryThrees\` ADD CONSTRAINT \`FK_c69ab07074f8751c680a5ebc142\` FOREIGN KEY (\`CategoryTwoId\`) REFERENCES \`CategoryTwoes\`(\`CategoryTwoId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Products\` ADD CONSTRAINT \`FK_926418ea2dda76dbaccfceb0dbe\` FOREIGN KEY (\`UnitId\`) REFERENCES \`Units\`(\`UnitId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Products\` ADD CONSTRAINT \`FK_dc1eb9f7e2c3797f60f1bfd6c7f\` FOREIGN KEY (\`CategoryOneId\`) REFERENCES \`CategoryOnes\`(\`CategoryOneId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Products\` ADD CONSTRAINT \`FK_d72348a6177a55523dae4875711\` FOREIGN KEY (\`CategoryTwoId\`) REFERENCES \`CategoryTwoes\`(\`CategoryTwoId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Products\` ADD CONSTRAINT \`FK_994ba49b7898a10d4ef59e2c7df\` FOREIGN KEY (\`CategoryThreeId\`) REFERENCES \`CategoryThrees\`(\`CategoryThreeId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Drafts\` ADD CONSTRAINT \`FK_a6f4d4f496b20cf7d3af4be1b75\` FOREIGN KEY (\`CustomerId\`) REFERENCES \`Customers\`(\`CustomerId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Drafts\` ADD CONSTRAINT \`FK_67bd6c99d9556c28882cf680f83\` FOREIGN KEY (\`StorageId\`) REFERENCES \`Storages\`(\`StorageId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Drafts\` ADD CONSTRAINT \`FK_ccf3de06dd631022b378b423726\` FOREIGN KEY (\`KindId\`) REFERENCES \`Kinds\`(\`KindId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Drafts\` ADD CONSTRAINT \`FK_d544369805c1da2b00f863f3076\` FOREIGN KEY (\`TransferYearId\`) REFERENCES \`TransferYears\`(\`TransferYearId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`DraftItems\` ADD CONSTRAINT \`FK_ae244d2c33dcbb1ffff52b46f73\` FOREIGN KEY (\`DraftId\`) REFERENCES \`Drafts\`(\`DraftId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`DraftItems\` ADD CONSTRAINT \`FK_f06cfa2db2653f47a201e949fe4\` FOREIGN KEY (\`ProductId\`) REFERENCES \`Products\`(\`ProductId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Inventories\` ADD CONSTRAINT \`FK_4ce766ae02367dd7045e709dc22\` FOREIGN KEY (\`ProductId\`) REFERENCES \`Products\`(\`ProductId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Inventories\` ADD CONSTRAINT \`FK_1609e6730cd1869d9448610be6a\` FOREIGN KEY (\`StorageId\`) REFERENCES \`Storages\`(\`StorageId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Inventories\` ADD CONSTRAINT \`FK_79fc30dd42e13c715aa49d4831f\` FOREIGN KEY (\`TransferYearId\`) REFERENCES \`TransferYears\`(\`TransferYearId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Inventories\` DROP FOREIGN KEY \`FK_79fc30dd42e13c715aa49d4831f\``);
        await queryRunner.query(`ALTER TABLE \`Inventories\` DROP FOREIGN KEY \`FK_1609e6730cd1869d9448610be6a\``);
        await queryRunner.query(`ALTER TABLE \`Inventories\` DROP FOREIGN KEY \`FK_4ce766ae02367dd7045e709dc22\``);
        await queryRunner.query(`ALTER TABLE \`DraftItems\` DROP FOREIGN KEY \`FK_f06cfa2db2653f47a201e949fe4\``);
        await queryRunner.query(`ALTER TABLE \`DraftItems\` DROP FOREIGN KEY \`FK_ae244d2c33dcbb1ffff52b46f73\``);
        await queryRunner.query(`ALTER TABLE \`Drafts\` DROP FOREIGN KEY \`FK_d544369805c1da2b00f863f3076\``);
        await queryRunner.query(`ALTER TABLE \`Drafts\` DROP FOREIGN KEY \`FK_ccf3de06dd631022b378b423726\``);
        await queryRunner.query(`ALTER TABLE \`Drafts\` DROP FOREIGN KEY \`FK_67bd6c99d9556c28882cf680f83\``);
        await queryRunner.query(`ALTER TABLE \`Drafts\` DROP FOREIGN KEY \`FK_a6f4d4f496b20cf7d3af4be1b75\``);
        await queryRunner.query(`ALTER TABLE \`Products\` DROP FOREIGN KEY \`FK_994ba49b7898a10d4ef59e2c7df\``);
        await queryRunner.query(`ALTER TABLE \`Products\` DROP FOREIGN KEY \`FK_d72348a6177a55523dae4875711\``);
        await queryRunner.query(`ALTER TABLE \`Products\` DROP FOREIGN KEY \`FK_dc1eb9f7e2c3797f60f1bfd6c7f\``);
        await queryRunner.query(`ALTER TABLE \`Products\` DROP FOREIGN KEY \`FK_926418ea2dda76dbaccfceb0dbe\``);
        await queryRunner.query(`ALTER TABLE \`CategoryThrees\` DROP FOREIGN KEY \`FK_c69ab07074f8751c680a5ebc142\``);
        await queryRunner.query(`ALTER TABLE \`CategoryTwoes\` DROP FOREIGN KEY \`FK_10a389995d7e72b84c59049db23\``);
        await queryRunner.query(`DROP TABLE \`Inventories\``);
        await queryRunner.query(`DROP TABLE \`DraftItems\``);
        await queryRunner.query(`DROP TABLE \`Customers\``);
        await queryRunner.query(`DROP TABLE \`Drafts\``);
        await queryRunner.query(`DROP TABLE \`Kinds\``);
        await queryRunner.query(`DROP TABLE \`TransferYears\``);
        await queryRunner.query(`DROP TABLE \`Storages\``);
        await queryRunner.query(`DROP TABLE \`Products\``);
        await queryRunner.query(`DROP TABLE \`CategoryThrees\``);
        await queryRunner.query(`DROP TABLE \`CategoryTwoes\``);
        await queryRunner.query(`DROP TABLE \`CategoryOnes\``);
        await queryRunner.query(`DROP TABLE \`Units\``);
    }

}
