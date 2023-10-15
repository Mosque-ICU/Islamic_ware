-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscriber" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "joined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "methodId" INTEGER,
    "prefrenceId" INTEGER,

    CONSTRAINT "Subscriber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prefrence" (
    "id" SERIAL NOT NULL,
    "marketing" BOOLEAN NOT NULL,
    "dawah" BOOLEAN NOT NULL,
    "promotional" BOOLEAN NOT NULL,
    "news" BOOLEAN NOT NULL,

    CONSTRAINT "Prefrence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Method" (
    "id" SERIAL NOT NULL,
    "email" BOOLEAN NOT NULL,
    "phone" BOOLEAN NOT NULL,
    "postal" BOOLEAN NOT NULL,

    CONSTRAINT "Method_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MailingList" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "subscriberId" INTEGER,

    CONSTRAINT "MailingList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailCampaign" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "mailingListId" INTEGER NOT NULL,

    CONSTRAINT "EmailCampaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Email" (
    "id" SERIAL NOT NULL,
    "subject" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL,
    "sender" TEXT NOT NULL,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EmailToSubscriber" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EmailToEmailCampaign" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Subscriber_email_key" ON "Subscriber"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MailingList_name_key" ON "MailingList"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_EmailToSubscriber_AB_unique" ON "_EmailToSubscriber"("A", "B");

-- CreateIndex
CREATE INDEX "_EmailToSubscriber_B_index" ON "_EmailToSubscriber"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EmailToEmailCampaign_AB_unique" ON "_EmailToEmailCampaign"("A", "B");

-- CreateIndex
CREATE INDEX "_EmailToEmailCampaign_B_index" ON "_EmailToEmailCampaign"("B");

-- AddForeignKey
ALTER TABLE "Subscriber" ADD CONSTRAINT "Subscriber_methodId_fkey" FOREIGN KEY ("methodId") REFERENCES "Method"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscriber" ADD CONSTRAINT "Subscriber_prefrenceId_fkey" FOREIGN KEY ("prefrenceId") REFERENCES "Prefrence"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MailingList" ADD CONSTRAINT "MailingList_subscriberId_fkey" FOREIGN KEY ("subscriberId") REFERENCES "Subscriber"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailCampaign" ADD CONSTRAINT "EmailCampaign_mailingListId_fkey" FOREIGN KEY ("mailingListId") REFERENCES "MailingList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmailToSubscriber" ADD CONSTRAINT "_EmailToSubscriber_A_fkey" FOREIGN KEY ("A") REFERENCES "Email"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmailToSubscriber" ADD CONSTRAINT "_EmailToSubscriber_B_fkey" FOREIGN KEY ("B") REFERENCES "Subscriber"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmailToEmailCampaign" ADD CONSTRAINT "_EmailToEmailCampaign_A_fkey" FOREIGN KEY ("A") REFERENCES "Email"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmailToEmailCampaign" ADD CONSTRAINT "_EmailToEmailCampaign_B_fkey" FOREIGN KEY ("B") REFERENCES "EmailCampaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
